<script>
    const props = defineProps(['blog', 'id']);
    const post = props.blog[parseInt(props.id) - 1];
</script>

<template>
    <div>
        <h2> {{ post.title }} </h2>
        <p> {{ post.content }} </p>
        <p> {{ post.date }} </p>
        
    </div>
</template>