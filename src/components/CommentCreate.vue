<template>
    <div>
        <b-input-group :prepend="name" class="mt-3">
            <b-form-textarea
                v-model="context"
                :placeholder="isSubComment? '덧글의 덧글을 달아주세요' : '덧글를 달아주세요'"
                rows="3"
                max-rows="6"
            ></b-form-textarea>
            <b-input-group-append>
                <b-button variant="info" @click="isSubComment? createSubComment() : createComment()">작성하기</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>
<script>
import data from '@/data'

export default {
   name: "CommentCreate",
   props: {
       contentId: Number,
       commentId: Number,
       isSubComment: Boolean,
       reloadComment: Function,
       reloadSubComment: Function,
       subCommentToggle: Function 
   },
   data() {
       return {
           name: 'lelana',
           context: ''
       }
   },
   methods: {
       createComment() {
            data.Comment.push({
                comment_id: data.Comment[data.Comment.length -1] + 1,
                user_id: 1,
                content_id: this.contentId,
                context: this.context,
                created_at: '2020-03-01 09:43:43',
                updated_at: null
            });
            this.reloadComment();
            this.context = "";
       },
       createSubComment() {
            data.SubComment.push({
                subcomment_id: data.SubComment[data.SubComment.length -1] + 1,
                user_id: 1,
                comment_id: this.commentId,
                context: this.context,
                created_at: '2020-03-01 09:43:43',
                updated_at: null
            });
            this.subCommentToggle();
            this.reloadSubComment();
            this.context = "";
       }
   }
}
</script>