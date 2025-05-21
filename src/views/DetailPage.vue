<script>
    const props = defineProps(['blog', 'id']);
    const post = props.blog[parseInt(props.id) - 1];
</script>

<template>
    I'm Detail Page
    {{ $route.params.id }}
    <div>
        <h2> {{ blog[ $route.params.id - 1 ].title }} </h2>
        <p> {{ blog[ $route.params.id - 1 ].content }} </p>
        <p> {{ blog[ $route.params.id - 1 ].date }} </p>
        
    </div>
</template>