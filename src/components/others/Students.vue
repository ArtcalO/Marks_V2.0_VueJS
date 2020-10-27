<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Student Form</h1>
                    <hr>
                    <div class="form-group">
                        <label for="text">First Name</label>
                        <input
                                v-model="name"
                                type="text"
                                class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="text">Last Name</label>
                        <input
                                v-model="subname"
                                type="text"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="number">Age</label>
                        <input
                                v-model="age"
                                type="number"
                                class="form-control">
                    </div>
                </div>
            </div>
           
          
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            @click.prevent="addStudent"
                            class="btn btn-primary"
                            >Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="container">
            <div  class="card-columns">

              <div v-for="stData in studentsData" v-bind:key="stData.url" class="card bg-light">
                <div class="card-body text-center">
                  <h5>{{ stData.name }}</h5>
                    <hr>
                      <div class="panel-body">
                        <p>Name: {{ stData.name }}</p>
                        <p>Subame: {{ stData.subname }}</p>
                        <p>Age: {{ stData.age }}</p>
                    </div>
                  <hr>
                  <button 

                        type="button" 
                        class="btn btn-outline-primary btn-sm" 
                        @click="getStudent(stData)"
                        >Edit
                    </button>
                    <button 

                        type="button" 
                        class="btn btn-outline-danger btn-sm" 
                        @click="deleteStudent(stData)"
                        >Delete

                    </button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            studentsData : null,
            name : '',
            subname : '',
            age : 0,
            std_index : 0,
            url : ''
        }
    },
    mounted () {
        this.getAllStudents();
    },
    methods : {
        getAllStudents(){
            axios.get('http://127.0.0.1:8000/api/students/')
            .then((res)=> {
                this.studentsData = res.data;
                this.name = '';
                this.subname = '';
                this.age = 0;
                this.url = ''
            })
        },
        addStudent(){
            if(this.url == ''){
                axios.post('http://127.0.0.1:8000/api/students/', {
                    name : this.name,
                    subname : this.subname,
                    age : this.age
                        }).then(() => {
                            this.getAllStudents();
                        }).catch(error => console.log(error));
            }
            else {
                axios.put(this.url, {
                    name : this.name,
                    subname : this.subname,
                    age : this.age
                        }).then(() => {
                            this.getAllStudents();
                        }).catch(error => console.log(error));
            }
            
        },
        deleteStudent(url){
            axios.delete(url)
        },
        getStudent(stData){
            this.url = stData.url;
            this.name = stData.name;
            this.subname = stData.subname;
            this.age = stData.age;
        }
    }
  
};
</script>

<style>

</style>
