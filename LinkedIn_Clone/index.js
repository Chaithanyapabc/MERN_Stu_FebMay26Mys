const readline = require("readline");
const chalk = require("chalk");

const { createProfile } = require("./user");
const {
    addSkill,
    addExperience,
    addEducation,
    viewProfile
} = require("./profile");

const {
    sendRequest,
    viewRequests,
    acceptRequest,
    rejectRequest,
    viewConnections
} = require("./connections");

const { createPost, likePost, commentPost } = require("./posts");
const { viewFeed } = require("./feed");

const store = require("./store");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    console.log(chalk.yellow("\n=== LinkedIn CLI ==="));
    console.log("1. Profile");
    console.log("2. Connections");
    console.log("3. Posts");
    console.log("4. Feed");
    console.log("5. Exit");

    rl.question("Choose option: ", (choice) => {
        switch (choice) {
            case "1": profileMenu(); break;
            case "2": connectionMenu(); break;
            case "3": postMenu(); break;
            case "4": feedMenu(); break;
            case "5": rl.close(); break;
            default:
                console.log(chalk.red("Invalid choice"));
                mainMenu();
        }
    });
}

// PROFILE MENU

function profileMenu() {
    console.log(chalk.cyan("\n--- Profile Menu ---"));
    console.log("1. Create Profile");
    console.log("2. View My Profile");
    console.log("3. Edit Profile");
    console.log("4. View Other Profiles");
    console.log("5. Back");

    rl.question("Choose option: ", async (choice) => {
        switch (choice) {
            case "1":
                rl.question("Name: ", (name) => {
                    rl.question("Headline: ", async (headline) => {
                        await createProfile(name, headline);
                        profileMenu();
                    });
                });
                break;

            case "2":
                const me = await viewProfile();
                console.log(me);
                profileMenu();
                break;

            case "3":
                editProfileMenu();
                break;

            case "4":
                console.log(store.users);
                profileMenu();
                break;

            case "5":
                mainMenu();
                break;

            default:
                console.log(chalk.red("Invalid"));
                profileMenu();
        }
    });
}

// EDIT PROFILE

function editProfileMenu() {
    console.log(chalk.blue("\n--- Edit Profile ---"));
    console.log("1. Add Skill");
    console.log("2. Add Experience");
    console.log("3. Add Education");
    console.log("4. Back");

    rl.question("Choose option: ", async (choice) => {
        switch (choice) {
            case "1":
                rl.question("Enter skill: ", async (skill) => {
                    await addSkill(skill);
                    editProfileMenu();
                });
                break;

            case "2":
                rl.question("Enter experience: ", async (exp) => {
                    await addExperience(exp);
                    editProfileMenu();
                });
                break;

            case "3":
                rl.question("Enter education: ", async (edu) => {
                    await addEducation(edu);
                    editProfileMenu();
                });
                break;

            case "4":
                profileMenu();
                break;

            default:
                console.log(chalk.red("Invalid"));
                editProfileMenu();
        }
    });
}

// CONNECTION MENU

function connectionMenu() {
    console.log(chalk.magenta("\n--- Connections ---"));
    console.log("1. Send Request");
    console.log("2. View Requests");
    console.log("3. Accept Request");
    console.log("4. Reject Request");
    console.log("5. View Connections");
    console.log("6. Back");

    rl.question("Choose option: ", async (choice) => {
        switch (choice) {
            case "1":
                console.log(store.users);
                rl.question("Enter user ID: ", async (id) => {
                    await sendRequest(Number(id));
                    connectionMenu();
                });
                break;

            case "2":
                console.log(await viewRequests());
                connectionMenu();
                break;

            case "3":
                rl.question("Enter sender ID: ", async (id) => {
                    await acceptRequest(Number(id));
                    connectionMenu();
                });
                break;

            case "4":
                rl.question("Enter sender ID: ", async (id) => {
                    await rejectRequest(Number(id));
                    connectionMenu();
                });
                break;

            case "5":
                console.log(await viewConnections());
                connectionMenu();
                break;

            case "6":
                mainMenu();
                break;

            default:
                console.log(chalk.red("Invalid"));
                connectionMenu();
        }
    });
}

// POST MENU

function postMenu() {
    console.log(chalk.green("\n--- Posts ---"));
    console.log("1. Create Post");
    console.log("2. Like Post");
    console.log("3. Comment on Post");
    console.log("4. Back");

    rl.question("Choose option: ", async (choice) => {
        switch (choice) {
            case "1":
                rl.question("Content: ", async (content) => {
                    await createPost(content);
                    postMenu();
                });
                break;

            case "2":
                console.log(store.posts);
                rl.question("Enter post ID: ", async (id) => {
                    await likePost(Number(id));
                    postMenu();
                });
                break;

            case "3":
                console.log(store.posts);
                rl.question("Enter post ID: ", (id) => {
                    rl.question("Comment: ", async (text) => {
                        await commentPost(Number(id), text);
                        postMenu();
                    });
                });
                break;

            case "4":
                mainMenu();
                break;

            default:
                console.log(chalk.red("Invalid"));
                postMenu();
        }
    });
}

// FEED MENU

async function feedMenu() {
    console.log(chalk.yellow("\n--- Feed ---"));

    const feed = await viewFeed();

    feed.forEach(post => {
        console.log(chalk.cyan(`\nPost ID: ${post.id}`));
        console.log(`Content: ${post.content}`);
        console.log(`Likes: ${post.likes.length}`);
        console.log(`Comments: ${post.comments.length}`);
    });

    mainMenu();
}

mainMenu();