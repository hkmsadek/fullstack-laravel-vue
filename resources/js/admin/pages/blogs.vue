<template>
    <div>
       <div class="content">
			<div class="container-fluid">

				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Blogs <Button @click="$router.push('/createBlog')" ><Icon type="md-add" /> Create Blogs</Button></p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Categories</th>
								<th>Tags</th>
								<th>Views</th>
								<th>Action</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
								<td>{{blog.id}}</td>
								<td class="_table_name">{{blog.title}}</td>
								<td> <span  v-for="(c, j) in blog.cat" v-if="blog.cat.length"><Tag type="border">{{c.categoryName}}</Tag></span> </td>
								<td> <span v-for="(t, j) in blog.tag" v-if="blog.tag.length"><Tag type="border">{{t.tagName}}</Tag></span> </td>
								<td> {{blog.views}}</td>

                                <td>
									<Button type="info" size="small" >Visit blog</Button>
									<Button type="info" size="small" @click="$router.push(`/editblog/${blog.id}`)" v-if="isUpdatePermitted">Edit</Button>
									<Button type="error" size="small" @click="showDeletingModal(blog, i)"  :loading="blog.isDeleting" v-if="isDeletePermitted">Delete</Button>

								</td>
							</tr>
								<!-- ITEMS -->
					</table>
					</div>
				</div>
                <deleteModal></deleteModal>

			</div>
		</div>
    </div>
</template>


<script>
import deleteModal from '../components/deleteModal.vue'
import { mapGetters } from 'vuex'
export default {
	data(){
		return {

			isAdding : false,
			tags : [],
            index : -1,
			showDeleteModal: false,
			isDeleing : false,
			deleteItem: {},
            deletingIndex: -1,
            blogs: [],


		}
	},

	methods : {
        showDeletingModal(blog, i){
            console.log('the index is ',i)
            this.deletingIndex = i
			const deleteModalObj  =  {
				showDeleteModal: true,
				deleteUrl : 'app/delete_blog',
				data : {id: blog.id},
				deletingIndex: i,
                isDeleted : false,
                msg : 'Are you sure you want to delete this blog?',
                successMsg: 'Blog has been deleted successfully!'
			}
			this.$store.commit('setDeletingModalObj', deleteModalObj)
			console.log('delete method called')
			// this.deleteItem = tag
			// this.deletingIndex = i
			// this.showDeleteModal = true

		}
	},

	async created(){
		const res = await this.callApi('get', 'app/blogsdata')
		if(res.status==200){
			this.blogs = res.data
		}else{
			this.swr()
		}
	},
	components : {
		deleteModal
	},
	computed : {
		...mapGetters(['getDeleteModalObj'])
	},
	watch : {
		getDeleteModalObj(obj){
			if(obj.isDeleted){
                this.blogs.splice(this.deletingIndex,1)
			}
		}
	}




}
</script>
