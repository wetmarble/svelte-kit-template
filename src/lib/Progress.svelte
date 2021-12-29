<script>
  export let label;
  export let progress;
</script>

<div>
  <div class="label">
    {label}
  </div>
  <div class="progress-number">
    {progress} <span style="font-weight: 100; font-size: 2.5rem; margin-left: -.3rem;">%</span>
  </div>
</div>

<style>
  .label {
    font-size: 1.5rem;
  }

  .progress-number {
    font-size: 4rem;
    font-weight: 600;
  }
</style>