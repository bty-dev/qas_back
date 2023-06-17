const projects = [
    {id: 1, name: "Timer"}
]

export const getAll = (req, res) => {
    res.status(200).json(projects);
}