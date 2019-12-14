function genManager(data){
    return(`
<div class="card">
<div class="card-body">
    <div class="card-title">
       Name: ${data.name}
    </div>
    <div class="card-subtitle mb-2 text-muted">
       Manager
    </div>
    <div class="card-text">
        Email: ${data.email}
        Id:${data.id}
        Office Number:${data.office}
    </div>
</div>
</div>
   ` )
}

module.exports = genManager;