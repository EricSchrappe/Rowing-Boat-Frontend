<template>
    <div :class="`alert ${alert_type} text-center`" role="alert">
            {{ message }}
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: {
        message: String,
        alert_type: String,
    }
}
</script>