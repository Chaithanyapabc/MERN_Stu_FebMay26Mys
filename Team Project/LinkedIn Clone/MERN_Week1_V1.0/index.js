//handles CLI Flow
const readline = require("readline");
const emitter = require("./events");
const utils = require("./utils");
const chalk = require("chalk");

//Event Listeners
emitter.on("operationFailed", (msg) => {
    console.log(chalk.red(msg));
});

emitter.on("connectionRequested", () => {
    console.log(chalk.blue("Connection request sent"));
});

emitter.on("connectionAccepted", () => {
    console.log(chalk.green("Connection accepted"));
});

emitter.on("connectionRejected", () => {
    console.log(chalk.yellow("Connection rejected"));
});
const { createProfile, login, updateProfile, getCurrentUser } = require("./user");
const { addSkill } = require("./profile");
const { viewOtherProfiles, sendRequest, viewRequests, respondToRequest, viewConnections } = require("./connections");
const { createPost, likePost, commentOnPost } = require("./posts");
const { viewFeed } = require("./feed");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n1.Create Profile");
    console.log("2.Login");
    console.log("3.View My Profile");
    console.log("4.Edit My Profile");
    //chaithanya
    console.log("5.View others profile");
    console.log("6.Send Request");
    console.log("7.View Requests");
    //Rashee
    console.log("8.Accept/Reject Requests");
    console.log("9.View Connections");
    console.log("10.Create Post");
    //puneeth
    console.log("11.View Feed/Posts from connections");
    console.log("12.Like / Comment on Posts");
    console.log("13.Exit");

    rl.question("Choose: ", async (choice) => {
        try {
            switch (choice) {
                case "1":
                    rl.question("Name: ", (name) => {
                        rl.question("Role: ", (role) => {
                            rl.question("Username: ", (username) => {
                                rl.question("Password: ", async (password) => {
                                    try {
                                        await createProfile(name, role, username, password);
                                        utils.success("Profile created successfully ");
                                    } catch (err) {
                                        utils.error(err);
                                    }
                                    menu();
                                });
                            });
                        });
                    });
                    break;

                case "2":
                    rl.question("Username: ", (username) => {
                        rl.question("Password: ", async (password) => {
                            try {
                                await login(username, password);
                                utils.success("Login successful");
                            } catch (err) {
                                utils.error(err);
                            }
                            menu();
                        });
                    });
                    break;

                case "3":
                    const user = getCurrentUser();

                    if (!user) {
                        utils.error("Please login first");
                    } else {
                        console.log(chalk.green("\nMY PROFILE"))
                        console.log(chalk.green("ID:", user.id))
                        console.log(chalk.green("Name:", user.name))
                        console.log(chalk.green("Role:", user.role))
                        console.log(chalk.green("Username:", user.username))
                        console.log(chalk.green("Skills:", user.skills.join(", ") || "None"))
                        console.log(chalk.green("Experience:", user.experience.join(",") || "None"))
                        console.log(chalk.green("Education:", user.education.join(" ") || "Not added"))
                        console.log(chalk.green("Connections:", user.connections.length));

                    }

                    menu();
                    break;

                case "4":
                    const current = getCurrentUser();

                    if (!current) {
                        utils.error("Please login first");
                        return menu();
                    }

                    console.log("\n EDIT PROFILE ");
                    console.log("1. Edit Role");
                    console.log("2. Add Skill");
                    console.log("3. Add Education");
                    console.log("4. Add Experience");

                    rl.question("Choose option: ", (opt) => {
                        switch (opt) {
                            case "1":
                                rl.question("Enter new role: ", async (role) => {
                                    await updateProfile({ role });
                                    utils.success("Role updated");
                                    menu();
                                });
                                break;

                            case "2":
                                rl.question("Enter skill: ", (skill) => {
                                    addSkill(skill);
                                    utils.success("Skill added");
                                    menu();
                                });
                                break;

                            case "3":
                                rl.question("Enter education: ", (edu) => {
                                    current.education.push(edu);
                                    utils.success("Education added");
                                    menu();
                                });
                                break;

                            case "4":
                                rl.question("Enter experience: ", (exp) => {
                                    current.experience.push(exp);
                                    utils.success("Experience added");
                                    menu();
                                });
                                break;

                            default:
                                utils.error("Invalid option");
                                menu();
                        }
                    });
                    break;

                case "5":
                    const profiles = viewOtherProfiles();

                    if (!profiles || profiles.length === 0) {
                        console.log("No profiles available");
                    } else {
                        profiles.forEach(u => {
                            console.log(`ID: ${u.id} | Name: ${u.name} | Role: ${u.role}`);
                        });
                    }

                    menu();
                    break;
                case "6":
                    rl.question("Enter Username: ", (username) => {
                        sendRequest(username);
                        menu();
                    });
                    break;

                case "7":
                    const requests = viewRequests();

                    if (!requests || requests.length === 0) {
                        utils.info("No connection requests");
                    } else {
                        requests.forEach(r => {
                            console.log(`From: ${r.senderName} (@${r.senderUsername}) | Status: ${r.status}`);
                        });
                    }

                    menu();
                    break;

                case "8":
                    const requestsList = viewRequests();

                    if (!requestsList || requestsList.length === 0) {
                        utils.info("No connection requests");
                        return menu();
                    }

                    // Show requests with index
                    requestsList.forEach((r, i) => {
                        console.log(`${i + 1}. ${r.senderName} (@${r.senderUsername}) - ${r.status}`);
                    });

                    rl.question("Select request number: ", (num) => {
                        const index = parseInt(num) - 1;

                        if (index < 0 || index >= requestsList.length) {
                            utils.error("Invalid selection");
                            return menu();
                        }

                        const selected = requestsList[index];

                        rl.question("1.Accept  2.Reject : ", (choice) => {
                            if (choice === "1") {
                                respondToRequest(selected.senderId, "accept");
                            } else if (choice === "2") {
                                respondToRequest(selected.senderId, "reject");
                            } else {
                                utils.error("Invalid choice");
                            }

                            menu();
                        });
                    });

                    break;
                case "9":
                    const connections = viewConnections();

                    if (!connections || connections.length === 0) {
                        utils.info("No connections yet");
                    } else {
                        console.log(chalk.green("\nYour Connections:"));
                        connections.forEach((c, i) => {
                            console.log(`${i + 1}. ${c.name} (@${c.username})`);
                        });
                    }

                    menu();
                    break;

                case "10":
                    const currentUserForPost = getCurrentUser();

                    if (!currentUserForPost) {
                        utils.error("Please login first");
                        return menu();
                    }

                    rl.question("Enter your post content: ", async (content) => {
                        try {
                            await createPost(content);
                            utils.success("Post created successfully");
                        } catch (err) {
                            utils.error(err);
                        }
                        menu();
                    });
                    break;

                case "11":
                    try {
                        const feed = viewFeed();

                        if (!feed || feed.length === 0) {
                            console.log("No posts from connections");
                        } else {
                            console.log("\n--- FEED ---");
                            feed.forEach((p, i) => {
                                console.log(`${i + 1}. ${p.author}: ${p.content}`);
                                console.log(`   Likes: ${p.likes} | Comments: ${p.comments}`);
                                console.log(`   Post ID: ${p.postId}`);
                            });
                        }
                    } catch (err) {
                        utils.error(err);
                    }

                    menu();
                    break;

                case "12":
                    const postsList = viewFeed();
                    const currentUser = getCurrentUser();

                    if (!postsList || postsList.length === 0) {
                        console.log("No posts available");
                        return menu();
                    }

                    postsList.forEach((p, i) => {
                        console.log(`${i + 1}. ${p.author}: ${p.content}`);
                    });

                    rl.question("Select post number: ", (num) => {
                        const index = parseInt(num) - 1;

                        if (index < 0 || index >= postsList.length) {
                            utils.error("Invalid selection");
                            return menu();
                        }

                        const selectedPost = postsList[index];

                        //Check: if current user is author
                        if (selectedPost.author === currentUser.name) {
                            console.log("\n--- YOUR POST ---");
                            console.log(`Content: ${selectedPost.content}`);
                            console.log(`Likes: ${selectedPost.likes}`);
                            console.log(`Comments: ${selectedPost.comments}`);
                            return menu();
                        }

                        // If NOT author => allow like and comment
                        rl.question("1. Like  2. Comment: ", (choice) => {
                            try {
                                if (choice === "1") {
                                    likePost(selectedPost.postId);
                                    utils.success("Post liked");
                                    menu();
                                }
                                else if (choice === "2") {
                                    rl.question("Enter comment: ", (text) => {
                                        commentOnPost(selectedPost.postId, text);
                                        utils.success("Comment added");
                                        menu();
                                    });
                                }
                                else {
                                    utils.error("Invalid option");
                                    menu();
                                }
                            } catch (err) {
                                utils.error(err);
                                menu();
                            }
                        });
                    });
                    break;

                case "13":
                    console.log("Exiting... ");
                    rl.close();
                    process.exit(0);

                default:
                    utils.error("Invalid option");
                    menu();
            }
        } catch (err) {
            utils.error(err);
            menu();
        }
    });
}

menu();