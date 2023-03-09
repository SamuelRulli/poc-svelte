<script lang="ts">
    import type IAdrress from "../interfaces/IAddress";
    import findAddress from "../services/ViaCep";
    import { zipCodeValidate } from "../Utils/cepUtils";
    import createObjAddress from "../Utils/createObjAddress";

    const NOT_FOUND   = 404;
    const BAD_REQUEST = 400;
    const SUCCESS     = 200;

    let result : IAdrress;
    let zipCodeInput = '';
    let errorCode: null | number = null;

    async function getData(){

      if(zipCodeValidate(zipCodeInput)){
        const zipCodeData = await findAddress(zipCodeInput);
        
        if(zipCodeData){
          result = createObjAddress(await zipCodeData.json());
          errorCode = SUCCESS;
        }else{
          errorCode = NOT_FOUND;
        }
      }else{
        errorCode = BAD_REQUEST;
      }
    }

</script>

<div class="container">
  <form on:submit|preventDefault={getData}>
    <div class="row g-3">
        <div class="col-sm">
          <input bind:value={zipCodeInput} type="text" class="form-control" placeholder="Zip" aria-label="Zip" required>
        </div>
    </div>
    {#if errorCode === 400}
      <span class="erro">Bad Request!</span>
    {:else if errorCode === 404}
      <span class="erro">No record found!</span>
    {/if}
    <br>
    <div class="d-grid gap-2 mx-auto">
      <button class="btn btn-primary">Search</button>
    </div>
    
  </form>
</div>

<div class="container">
  <table class="table">
      <thead>
        <tr>
          <th scope="col">Address</th>
          <th scope="col">Location</th>
          <th scope="col">Neighborhood</th>
          <th scope="col">State</th>
          <th scope="col">zipCode</th>
        </tr>
      </thead>
      {#if result}
        <tbody>
          <tr>
            <td>{result.address}</td>
            <td>{result.location}</td>
            <td>{result.neighborhood}</td>
            <td>{result.state}</td>
            <td>{result.zipCode}</td>
          </tr>
        </tbody>
      {/if}
  </table>
</div>

<style>
  .container {
    width: 100vw;
    height: 25vh;
    background: #cdd9e5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>