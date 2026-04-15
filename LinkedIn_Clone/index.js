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
    console.log("2.View Profile");
    console.log("3.Add Skill");
    console.log("4.View Users");
    console.log("5.Send Request");
    console.log("6.View Requests");
    console.log("7.Create Post");
    console.log("8.View Feed");
    console.log("9.Exit");
    console.log("10.Switch User");

    rl.question("Choose: ", async (choice) => {
        try {
            switch (choice) {
                case "1":
                    rl.question("Name: ", async (name) => {
                        await createProfile(name, "Developer");
                        utils.success("Profile created");
                        menu();
                    });
                    break;

                case "2":
                    console.log(getCurrentUser());
                    menu();
                    break;

                case "3":
                    rl.question("Skill: ", (skill) => {
                        addSkill(skill);
                        utils.success("Skill added");
                        menu();
                    });
                    break;

                case "4":
                    console.log(getAllUsers());
                    menu();
                    break;

                case "5":
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

                case "6":
                    console.log(getRequests());
                    menu();
                    break;

                case "7":
                    rl.question("Post: ", async (content) => {
                        await createPost(content);
                        utils.success("Post created");
                        menu();
                    });
                    break;

                case "8":
                    const feed = await viewFeed();
                    console.log(feed);
                    menu();
                    break;

                case "9":
                    rl.close();
                    break;

                case "10":
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