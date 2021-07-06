<template>
    <div class='col col--12'>
        <div class='col col--12 px12 py12 border-b border--gray'>
            <img @click='external("https://openaddresses.io")' class='h24 w24 round mr12 cursor-pointer' src='../../public/logo.jpg'/>
            <router-link to='/data'><button class='btn btn--stroke btn--s btn--gray round mr12'>Data</button></router-link>
            <router-link to='/run'><button class='btn btn--stroke btn--s btn--gray round mr12'>Runs</button></router-link>
            <router-link to='/job'><button class='btn btn--stroke btn--s btn--gray round mr12'>Jobs</button></router-link>
            <router-link to='/errors'><button class='btn btn--stroke btn--s btn--gray round mr12'>
                <span class='bg-gray-light round color-gray px6' v-text='errors'/>
                Errors
            </button></router-link>

            <span class='fr'>
                <a href='mailto:hello@openaddresses.io' class='btn btn--stroke btn--s btn--gray round mr12'>Contact Us</a>

                <router-link to='/upload'><button class='btn btn--stroke btn--s btn--gray round mr12 h24'>Contribute</button></router-link>

                <button @click='internal("/docs/", true)' class='btn btn--stroke btn--s btn--gray round mr12'>Docs</button>

                <router-link v-if='!auth.username' to='/login'><button class='btn btn--stroke btn--s btn--gray round mr12'>Login</button></router-link>
                <router-link v-else to='/profile'>
                    <button class='dropdown btn btn--stroke btn--s btn--gray round mr12'>
                        <svg class='inline pt3 icon'><use xlink:href='#icon-user'/></svg><span v-text='auth.username'/>

                        <div class='round dropdown-content'>
                            <div v-on:click.stop.prevent='logout' class='round bg-gray-faint-on-hover'>Logout</div>
                        </div>
                    </button>
                </router-link>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    mounted: function() {
        this.getLogin();
        this.getCount();
    },
    data: function() {
        return {
            errors: 0, //Number of Job Errors
            auth: {
                username: false,
                email: false,
                access: false,
                flags: {}
            },
            runid: false,
            jobid: false,
            dataid: false
        };
    },
    methods: {
        logout: async function() {
            try {
                await window.std('/api/login', {
                    method: 'DELETE'
                });

                this.auth = false;
                this.$emit('auth', this.auth);
                this.$router.push('/data');
            } catch (err) {
                this.$emit('err', err);
            }
        },
        getLogin: async function() {
            try {
                this.auth = await window.std('/api/login');
                this.$emit('auth', this.auth);
            } catch (err) {
                this.$emit('err', err);
            }
        },
        getCount: async function() {
            try {
                this.errors = (await window.std('/api/job/error/count')).count;
            } catch (err) {
                this.$emit('err', err);
            }
        },
        internal: function(url, tab) {
            url = window.location.origin + url;

            if (!tab) {
                window.location.href = url;
            } else {
                window.open(url, "_blank");
            }
        },
        external: function(url, tab) {
            if (!tab) {
                window.location.href = url;
            } else {
                window.open(url, "_blank");
            }
        },
    }
}
