 genEngineer =(data) =>{
     return(`<div class="card text-white bg-warning ">
     <div class="card-body">
         <div class="card-title">
            <h2>Name:${data.name}</h2>
         </div>
         <div class="card-subtitle mb-2 text-muted">
           <h3>Engineer</h3>
         </div>
         <div class="card-text">
            <p> Role:${data.role}</p>
             <p>Email:${data.email}</p>
             <p>Id:${data.id}</p>
             <p>Github:${data.github}</p>
         </div>
     </div>
     </div>`)

}

module.exports = genEngineer;

