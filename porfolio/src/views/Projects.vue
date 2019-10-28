<template>
  <div class="project-card">
    <div class="project-title">
      <div class="project-title-content">
        <p>{{projects[0].title}}</p>
      </div>
    </div>
    <div class="card-content">
      <p>{{projects[0].description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      projects: [
        {
          title: "Tweeter",
          techStack: ["Javascript", "Express", "CSS"],
          description: "Twitter Clone for Lighthouse Labs Bootcamp"
        },
        {
          title: "TinyApp",
          techStack: ["Javascript", "html", "CSS", "Express"],
          description: "Bit.ly clone for Lighthouse Labs Bootcamp"
        },
        {
          title: "Scheduler",
          techStack: [
            "React",
            "postgresql",
            "React-Hooks",
            "Javascript",
            "html",
            "CSS",
            "Axios"
          ],
          description: "Scheduling app for Lighthouse Labs Bootcamp"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.project-card {
  background: #333;
  padding: 3em;
  border-radius: 10px;
  color: white;
}
.project-title {
  display: flex;
  align-items: center;
  background: #222;
  border-radius: 10px;
}
.project-title-content p {
  margin-bottom: 0;
  color: rgb(210, 210, 210);
}
</style>