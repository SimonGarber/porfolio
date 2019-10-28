<template>
  <div class="about-card">
    <div class="card-title">
      <img
        height="50px"
        src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png"
        alt="avatar"
        class="avatar"
      />
      <div class="title-text-content">
        <p>About me</p>
        <h2>Simon Garber</h2>
      </div>
    </div>
    <div class="card-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aut tenetur! Mollitia eveniet nemo ratione officiis ab molestias asperiores tenetur nihil officia rerum. Consequatur inventore vero corporis libero soluta deserunt, numquam maiores distinctio explicabo dicta ab sequi debitis officiis tempore reiciendis esse aliquam commodi. Impedit eaque fugit culpa cumque ipsum!</p>
      <table width="100%">
        <tr>
          <th>Area of Expertise</th>
          <th>Skills</th>
        </tr>

        <tr>
          <td>Front-end</td>
          <td>React.js, Vue.js, HTML, CSS, Javascript</td>
        </tr>
        <tr>
          <td>Back End</td>
          <td>Node.js, Ruby/Rails, Express.js, Postgresql</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about-card {
  background: #333;
  padding: 3em;
  border-radius: 10px;
  color: white;
}

.card-title {
  display: flex;
  align-items: center;
  background: #222;
  border-radius: 10px;
}
.avatar {
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin: 0 30px;
}
.title-text-content p {
  margin-bottom: 0;
  color: rgb(210, 210, 210);
}

.title-text-content h2 {
  margin-top: 0;
}

.card-content p {
  line-height: 1.5;
  margin: 30px auto;
}

table {
  border-spacing: 0px;
  margin: 50px auto;
}

table tr th,
tr td {
  border: 1px solid white;
  border-top: none;
  padding: 10px;
  text-align: center;
  border-left: none;
  border-right: none;
}
</style>
