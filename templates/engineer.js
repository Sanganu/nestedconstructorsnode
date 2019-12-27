 genEngineer =(data) =>{
     return(`<div class="card">
     <div class="card-body">
         <div class="card-title">
            Name:${data.name}
         </div>
         <div class="card-subtitle mb-2 text-muted">
           Engineer
         </div>
         <div class="card-text">
             Role:${data.role}
             Email:${data.email}
             Id:${data.id}
             Github:${data.github}
         </div>
     </div>
     </div>`)

}

module.exports = genEngineer;

