function genManager(data){
    return(`
<div class="card mb-4 text-white bg-dark">
<div class="card-body">
    <div class="card-title">
       <h2>Name: ${data.name}</h2>
    </div>
    <div class="card-subtitle mb-2 text-muted">
      <h3> Manager</h3>
    </div>
    <div class="card-text">
       <p> Email: ${data.email}</p>
        <p>Id:${data.id}</p>
        <p>Office Number:${data.office}</p>
    </div>
</div>
</div>
   ` )
}

module.exports = genManager;