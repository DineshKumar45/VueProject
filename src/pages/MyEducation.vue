<template>
    <q-card id="card">
      <q-card-section>
        <h4 id="h3">My Education Details</h4>
      </q-card-section>
      <hr>
      <q-separator dark />
    <q-card-section>
        <q-table id="tab"
        flat bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
    </q-card-section>
    <q-card-actions id="btn">
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
    name:'Name of the Institution',
    align:'left',
    label:'Institution',
    field: row => row.name,
  },
  {
    name:'Place',
    align:'left',
    label:'Place',
    field: row => row.place
  },
  {
    name:'Level of Education',
    align:'left',
    label:'Level',
    field: row => row.level
  }
  
  ]

  const rows =[
    {
        name:'Institute of Aeronautical Engineering',
        place:'Hyderabad',
        level:'Engineering'
    },
    {
        name:'Narayana Junior College',
        place:'Hyderabad',
        level:'Higher Secondary'
    },
    {
        name:'Geetha High School',
        place:'Medak',
        level:'Secondary Education'
    }
  ]
    export default {
    setup () {
    return {
        columns,
        rows
    }
    }
    }
</script>

<style scoped>
#card{
    background-color: aliceblue;
    /* width: 500px; */
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