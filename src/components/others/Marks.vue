<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Marks Form </h1>
                    <hr>
                    <div class="form-group">
                    <label for="priority">Student</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="marks_data.student"
                            >
                        <option
                            v-for="student in students"
                        >{{student.Name}} {{ student.Subname }}</option>
                    </select>
                	</div>
                    <div class="form-group">
                    <label for="course">Course</label>
                    <select
                            id="course"
                            class="form-control"
                            v-model="marks_data.course"
                            >
                        <option
                            v-for="course in courses"
                        >{{ course }}</option>
                    </select>
                    </div>
                    <div class="form-group">
                        <label for="text">Mark Obtained</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="marks_data.mark">
                    </div>
                    
                </div>
            </div>
           
          
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="addMark"
                            >Submit!
                    </button>
                    <button
                            v-if="edit"
                            @click.prevent="modifyMark"
                            class="btn btn-primary"
                            >Modify!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Avaible students marks</h4>
                    </div>
                    <div class="panel-body">
                        <table class="table">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Student</th>
                                <th>Course</th>
                                <th>Mark</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(mark, index) in marks">
                                
                                <td>{{ index }}</td>
                                <td>{{ mark.Student }}</td>
                                <td>{{ mark.Course }}</td>
                                <td>{{ mark.Mark }}</td>
                                <td>
                                    <button 
                                        @click.prevent="getMark(mark, index)"
                                        type="button" 
                                        class="btn btn-primary btn-sm" 
                            
                                        >Edit
                                    </button>
                                    <button 
                                        @click.prevent="deleteMark(index)"
                                        type="button" 
                                        class="btn btn-danger btn-sm" 
                                        
                                        >Delete
                                    </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return { 
            marks_data : {
                student : '',
                course : '',
                mark : 0
            },
            mark_index : 0,
            edit : false
        }
    },
    computed : {
        students(){
            return this.$store.state.students;
        },
        courses(){
            return this.$store.state.courses;
        },
        marks(){
            return this.$store.state.marks;
        }
    },
    methods:{
        addMark(){
            this.$store.state.marks.push({
                Student : this.marks_data.student,
                Course : this.marks_data.course,
                Mark : this.marks_data.mark
            });
        },
        deleteMark(index){
            this.$store.state.marks.splice(index, 1);
        },
        getMark(mark, index){
            this.edit = true;
            this.mark_index = index;
            this.marks_data.student = mark.Student;
            this.marks_data.course = mark.Course;
            this.marks_data.mark = mark.Mark;
        },
        modifyMark(){
            this.$store.state.marks.splice(this.mark_index, 1, {
                Student : this.marks_data.student,
                Course : this.marks_data.course,
                Mark : this.marks_data.mark
            });
            this.edit = false;
        }
    }
};
</script>

<style>

</style>
