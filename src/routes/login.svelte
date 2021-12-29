<script context='module'>
  export async function load({session}) {
    if (session.authenticated) {
      return {
        status: 302,
        redirect: '/'
      }
    }
    return {}
  }
</script>

<script>
  import Input from '$lib/Input.svelte'
  import {isEmail, isPassword} from '$lib/utils/validation'
  import {api} from '$lib/utils/api'
  import {authenticate} from '$lib/utils/auth'
  import {notifications} from '$lib/Noti.svelte'


  let email = ''
  let password = ''

  $: emailValid = isEmail(email)
  $: passwordValid = isPassword(password)
  $: formIsValid = emailValid && passwordValid

  async function submitForm(e) {
    e.preventDefault()
    const data = {
      email: email,
      password: password
    }
    try {
      const res = await api('POST', 'login', data)
      if (res.status >= 400) {
        throw Error(res.message)
      }
      await authenticate(res)
      email = ''
      password = ''

      return location.href = `/`
    } catch (err) {
      notifications.push(err.message)
    }
  }

  function handleKeyDown(e) {
    if (formIsValid) {
      if (e.keyCode === 13) {
        submitForm(e)
      }
    }
    return null
  }
</script>

<svelte:window on:keydown={handleKeyDown}/>

<svelte:head>
  <title>Login Form</title>
  <meta name='robots' content='noindex, nofollow'/>
</svelte:head>

<main>
  <div class='container'>
    <div class='d-flex justify-content-center mt-5'>
      <div class='card login'>
        <div class='card-body'>
          <h2>Sign In</h2>
          <div>
            <Input
                id='email'
                label='Email'
                valid={emailValid}
                validityMessage='Please enter a valid email.'
                value={email}
                className='is-large'
                on:input={(event) => (email = event.target.value)}
            />
            <Input
                id='password'
                label='Password'
                help="Password minimum length 8, must have one capital letter, 1 number, and one unique character."
                type='password'
                valid={passwordValid}
                validityMessage='Please enter a valid password.'
                value={password}
                className='is-large'
                on:input={(event) => (password = event.target.value)}
            />
          </div>
          <div>
            <a href='/forgot' class="text-black-50">Forgot Password?</a>
            <br/>
            <br/>
          </div>
          <div class="d-grid gap-2">
            <button
                aria-disabled={!formIsValid ? 'true' : 'false'}
                class='btn btn-primary btn-lg'
                on:click={submitForm}
                class:disabled={!formIsValid}
                disabled={!formIsValid}>
              Sign In
            </button>
          </div>
        </div>
        <div class='card-footer text-center bg-white'>
          <a href='register' class='text-black-50'> Don't have an account? </a>
        </div>
      </div>

    </div>

  </div>
</main>

<style>
  .container {
    margin-top: calc( 100vh/6 );
  }

  .login {
    width: 25rem;
  }

  .disabled {
    pointer-events: none;
  }

</style>
