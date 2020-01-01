genIntern = (data) => {
    return(`
    <div class="card mb-4 text-white bg-info">
    <div class="card-body">
        <div class="card-title">
        <h2>Name:${data.name}</h2>
        </div> 
        <div class="card-subtitle mb-2 text-muted">
        <h3>Intern </h3>   </div>
        <div class="card-text"> 
           <p> Email:${data.email}</p>
            <p>ID:${data.id}</p>
            <p>School:${data.school}</p>
        </div>
    </div>
    </div>
    `
    )
}

module.exports = genIntern;