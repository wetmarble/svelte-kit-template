<script>
  import { session } from '$app/stores';
  import {variables} from '$lib/utils/variables';
  import Progress from '$lib/Progress.svelte';

  let user = $session.user
</script>

<div class="container">
  <div class="splash-container">
    <div>
      <p class="h1 thin">Welcome to the</p>
      <p class="h1 thick">{variables.appName} Portal</p>
      <p class="h1 thin">{user.username}</p>
    </div>
  </div>
</div>

<div class="container">
  <div class="progress-container">
    <Progress label="Engineering" progress="85" />
    <Progress label="Software" progress="65" />
    <Progress label="Fabrication" progress="34" />
    <Progress label="Graphics" progress="45" />
    <Progress label="Commissioning" progress="10" />
  </div>
</div>
<!--<div class='hero-bg'>-->
<!--  <div class="container">-->
<!--    <div class="center">-->
<!--      <Logo/>-->
<!--      <div class='tagline'>Simple starter template to build svelte apps</div>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->

<!--
<div class='container'>
  <div class='row blogs'>
    <div class='col-md'>
      <div class='card mb-3'>
        <img src='img/1.webp' class='card-img-top' alt='...'>
        <div class='card-body'>
          <h5 class='card-title'>Power by Svelte</h5>
          <p class='card-text'>SvelteKit is an application framework powered by Svelte — build bigger apps with a
            smaller footprint and no headaches</p>
          <a href='https://svelte.dev/' class='btn btn-primary'>Learn more</a>
        </div>
      </div>
    </div>
    <div class='col-md'>
      <div class='card mb-3'>
        <img src='img/1.webp' class='card-img-top' alt='...'>
        <div class='card-body'>
          <h5 class='card-title'>Sveltekit</h5>
          <p class='card-text'>A framework for building web applications, with a simple development experience and
            flexible filesystem-based routing</p>
          <a href='https://kit.svelte.dev' class='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    </div>
    <div class='col-md'>
      <div class='card mb-3'>
        <img src='img/1.webp' class='card-img-top' alt='...'>
        <div class='card-body'>
          <h5 class='card-title'>Build fast</h5>
          <p class='card-text'>Hit the ground running with advanced routing, server-side rendering, code-splitting,
            offline support and more</p>
          <a href='https://kit.svelte.dev/docs' class='btn btn-primary'>Read docs</a>
        </div>
      </div>
    </div>
  </div>
</div>
-->
<style>
  .container {
    color: white;
    justify-content: center;
  }

  .splash-container{
    display: grid;
    justify-content: center;
    align-content: center;
    height: 30vh;
  }

  .progress-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
    justify-content: center;
    align-content: center;
  }

  a {
    color: #74a9ce;
  }

  .h1 {
    color: white;
    font-size: 4rem;
    margin: 0;
  }
  .h1.thin {
    font-weight: 100;
    font-size: 2.5rem;
  }
  .h1.thick {
    font-weight: 800;

  }
</style>