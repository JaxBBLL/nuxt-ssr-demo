<template>
  <div class="container">
    <h1>user list</h1>
    <nuxt-link to="/user">
      user
    </nuxt-link>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'user-id', params: { id: 1 } }">
          user1
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/user/2">
          user2
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
