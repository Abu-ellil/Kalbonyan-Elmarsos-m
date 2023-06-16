
const createJob =async(req,res)=>{
    res.send('create job')
}

const deleteJob =async(req,res)=>{
    res.send('delete job')
}

const getAllJobs =async(req,res)=>{
    res.send("get All Jobs");
}

const updateJob =async(req,res)=>{
    res.send("update Job");
}

const showStats =async(req,res)=>{
    res.send('show status')
}


export { createJob, deleteJob, getAllJobs, showStats, updateJob };