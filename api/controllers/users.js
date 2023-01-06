
import { db } from "../db.js";


export const getTask = (_, res) =>{

    const q = "SELECT * FROM task";
    db.query(q,(err, data)=>{
        if(err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addTask = (req, res) =>{
    const q =
    "INSERT INTO task(`tasks`, `date_task`) VALUES(?)";

    const values = [
        req.body.tasks,
        req.body.date_task,
        
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err);
    
        return res.status(200).json("Tarefa criada com sucesso.");
      });
}

export const updateTask = (req, res) => {
    const q =
      "UPDATE task SET `tasks` = ?, `date_task` = ? WHERE `id` = ?";
  
    const values = [
      req.body.tasks,
        req.body.date_task,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Tarefa atualizada com sucesso.");
    });
  };

export const deleteTask = (req, res) => {
    const q = "DELETE FROM task WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Tarefa deletada com sucesso.");
    });
  };
  