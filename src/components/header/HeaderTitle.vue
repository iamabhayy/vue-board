<template>
  <div>
    <h2>{{title}}</h2>
    <p class="subtitle">
      {{subtitle}}
    </p>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String
    }
};
</script>