genIntern = (data) => {
    return(`
    <div class="card">
    <div class="card-body">
        <div class="card-title">
        Name:${data.name}
        </div> 
        <div class="card-subtitle mb-2 text-muted">
        Intern    </div>
        <div class="card-text">
            Email:${data.email}
            ID:${data.id}
            School:${data.school}
        </div>
    </div>
    </div>
    `
    )
}

module.exports = genIntern;