<template>
    <q-card id="card">
      <q-card-section>
        <h4 id="h3">My Hobbies</h4>
      </q-card-section>
      <hr>
      <q-separator dark />
    <q-card-section>
        <q-table id="tab"
        flat bordered
      :rows="rows"
      :columns="columns"
      row-key="Hobbies"
    />
    </q-card-section>
    <q-card-actions>
        <q-btn class="btn" @click="event =>$router.push('/dinesh/home')">Home</q-btn>
      </q-card-actions>

    <q-page-container>
      <router-view />
    </q-page-container>
    </q-card>    
    
</template>

<script>
const columns = [
  {
    Hobbies:'My Hobbies',
    align:'center',
    label:'My Hobbies',
    field: row => row.Hobbies,
  }
  ]

  const rows =[
    {
        Hobbies:'Volley Ball',
    },
    {
        Hobbies:'Cricket'
    },
    {
        Hobbies:'Listening to Music'
    }
  ]
    export default {
    setup () {
    return {
        // columns,
        rows
    }
    }
    }
</script>

<style scoped>
#card{
    background-color: aliceblue;
    width: 500px; 
    margin-left: auto;
    margin-right: auto;
}
.cls{
    align-items: center;
    border-color: black;
}
.btn{
  border: 10cap;
  margin-left: auto;
  margin-right: auto;
}
</style>