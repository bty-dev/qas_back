const users = [{
    id: 1,
    name: "bty",
    password: "bty",
    projects: 0,
    deployedProjects: 0
}]

export const loginUser = (req, res) => {
    const {
        login,
        password
    } = req.body;

    if (login === "bty" && password === "bty") {
        res.status(200).json("Success authorization!");
        return;
    }
    res.status(404).json("Invalid data!");
}

export const getUserStats = (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex(item => item.id === +id);
    console.log(userIndex);
    if (userIndex === -1) {
        res.status(404).json("User doesn't exist!");
        return;
    }

    res.status(200).json(users[userIndex])

}

export const changeUserName = (req, res) => {
    const id = req.params.id;
    const {
        newName
    } = req.body;
    const userIndex = users.findIndex(item => item.id === +id);

    users[userIndex].name = newName;

    res.status(200).json(users[userIndex]);
}

export const registerUser = (req, res) => {
    const {
        login,
        password
    } = req.body;
    const id = users[users.length - 1].id + 1;

    users.push({
        id: id,
        name: login,
        password: password,
        projects: 0,
        deployedProjects: 0,
    })
    res.status(200).json("Successfully register!");
}