<script>
    import ProfileCard from '../components/ProfileCard.svelte'
    export let userInfo = undefined; // injected on page mount (see App.svelte)

</script>

<h1>User Profile</h1>
{#if userInfo}
    <ProfileCard {userInfo} />
{:else}
    Sorry, you need to log in first.
{/if}
