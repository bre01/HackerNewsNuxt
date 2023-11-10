<script>
import timestamp  from "unix-timestamp";
    export default {
        props: ['time'],
        data() {
            return {
                abs_time: null,
                relative_time: null
            }
        },
        mounted() {
            const pattern = / GMT\+0800 \(China Standard Time\)$/;
            this.abs_time = timestamp.toDate(this.time).toString().replace(pattern, '');
        },
        computed: {
            relative_time() {
                var a={ hour: Math.round((parseInt(timestamp.now()) - parseInt(this.time)) / 3600), min: (parseInt(timestamp.now()) - parseInt(this.time)) % 60 };
                return `${a.hour} hours ago`;

            }
    }}
</script>


<template>
    <div>
       <span>{{ abs_time }}</span><span v-show="true">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp {{  relative_time}}</span>
    </div>
</template>
