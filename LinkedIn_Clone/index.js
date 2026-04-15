//handles CLI Flow
const readline = require("readline");
const emitter = require("./events");
const utils = require("./utils");

const { createProfile, getCurrentUser, getAllUsers } = require("./user");
const { addSkill } = require("./profile");
const { sendRequest, getRequests, acceptRequest } = require("./connections");
const { createPost } = require("./posts");
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
    console.log("5.View Users");
    console.log("6.Send Request");
    console.log("7.View Requests");
    console.log("8.Create Post");
    console.log("9.View Feed");
    console.log("10.Exit");
    console.log("11.Switch User");

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
                                        utils.success("Profile created successfully with username: ", username);
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
                                const { login } = require("./user");
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
                        const { updateProfile } = require("./user");

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
                    console.log(getAllUsers());
                    menu();
                    break;

                case "6":
                    rl.question("User ID: ", async (id) => {
                        try {
                            await sendRequest(id);
                            utils.success("Request sent");
                        } catch (err) {
                            utils.error(err);
                        }
                        menu();
                    });
                    break;

                case "7":
                    console.log(getRequests());
                    menu();
                    break;

                case "8":
                    rl.question("Post: ", async (content) => {
                        await createPost(content);
                        utils.success("Post created");
                        menu();
                    });
                    break;

                case "9":
                    const feed = await viewFeed();
                    console.log(feed);
                    menu();
                    break;

                case "10":
                    rl.close();
                    break;

                case "11":
                    const users = getAllUsers();

                    users.forEach(u => {
                        console.log(`ID: ${u.id} | Name: ${u.name}`);
                    });

                    rl.question("Enter User ID to switch: ", (id) => {
                        const user = users.find(u => u.id === id);

                        if (!user) {
                            utils.error("User not found");
                        } else {
                            const { setCurrentUser } = require("./user");
                            setCurrentUser(user);
                            utils.success(`Switched to ${user.name}`);
                        }
                        menu();
                    });
                    break;

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