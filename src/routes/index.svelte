<script>
	import { goto } from '$app/navigation'
	import '../app.postcss'
</script>

<button class="btn-blue" on:click={async () => await goto('/test')}>Test</button>
