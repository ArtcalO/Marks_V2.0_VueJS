<template>
	  <div class="container">
		         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Avaible course</h4>
                    </div>
                    <div class="panel-body">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Course Name</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(course, index) in courses">
                                <td>{{ index }}</td>
                                <td>{{ course }}</td>
                                <td>
                                    <button 

                                        type="button" 
                                        class="btn btn-primary btn-sm" 
                                        @click="getCourse(course)"

                                        >Edit
                                    </button>
                                    <button 

                                        type="button" 
                                        class="btn btn-danger btn-sm" 
                                        @click="deleteCourse(index)"
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
	computed : {
        courses(){
            return this.$store.state.courses;
        },
        edit(){
        	return this.$store.state.edit;
        }
        object_index(){
        	return this.$store.state.object_index;
        }
    },
    methods : {
    getCourse(course){
        this.$store.state.edit = true;
        this.course_name = course;
        this.$store.state.object_index = this.$store.state.courses.indexOf(this.course_name);
        cosole.log(this.$store.state.object_index);

    },

    deleteCourse(index){
        this.$store.state.courses.splice(index, 1);
    },
    }

};
</script>

<style>

</style>