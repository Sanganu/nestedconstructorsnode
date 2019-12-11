function genManager(data){
    return(`
<div class="card">
<div class="card-body">
    <div class="card-title">
       Name: ${name}
    </div>
    <div class="card-subtitle mb-2 text-muted">
       Manager
    </div>
    <div class="card-text">
        Email: $email}
        Id:${id}
        Office Number:${onum}
    </div>
</div>
</div>
   ` )
}

module.exports = genManager;