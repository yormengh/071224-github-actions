const profileData = {
  title: "Resume",
  name: "Moses Amartey",
  sub_title: "DevOps Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `Analytical thinking DevOps Engineer focused on applying DevSecOps engineering principles using both traditional and innovative methods, ensuring seamless security of software integration and delivery. Dedicated to building and managing CI/CD pipelines as well as automating cloud infrastructure management and provisioning using IaC tools, and implementing robust monitoring and security practices. Committed to optimizing performance, leading incident management, and fostering a culture of collaboration and continuous improvement. And with my Technical skills, I am able to enhance efficiency, reliability and high availability across all Software development platforms.`,
    contact: {
      email: "yormengh@gmail.com",
      phone: "+233555910005",
      address: "Tema, Accra - Ghana",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/moses-amartey",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/yormengh",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      title: "Operating System",
      value: "Linux (Ubuntu, RedHat)",
    },
    {
      title: "Languages & Scripting",
      value: "Bash, Python",
    },
    {
      title: "Version Control",
      value: "Git",
    },
    {
      title: "CI/CD",
      value: "Jenkins, GitHub Actions, ArgoCD, GitOps",
    },
    {
      title: "Container & Orchestration",
      value: "Docker, Kubernetes, Helm",
    },
    {
      title: "Monitoring & Logging",
      value: "Grafana, Prometheus, Loki",
    },
    {
      title: "Infrastructure as Code (IaC)",
      value: "Terraform, Pulumi",
    },
    {
      title: "DevSecOps",
      value: "Security integration in CI/CD, Incident management",
    },
  ],
  experiences: [
    {
      organization: "JOMACS IT SOLUTION INC.",
      title: "DevOps Engineer",
      date: "February 2021 - Present",
      details: [
        `Designed and implemented containerization strategies using Docker and Kubernetes, resulting in a 20% improvement in resource utilization and management through enhanced collaboration and streamlined processes.`,
        `Developed and maintained automated CI/CD pipelines that reduced deployment time by 50%, achieving a 99.9% deployment success rate across development, staging, and production environments.`,
        `Spearheaded the transition to Ansible and Terraform for provisioning infrastructures, including EC2 instances, RDS databases, S3 buckets, and VPCs, resulting in a 33% reduction in manual configuration time and a 40% decrease in operational costs.`,
        `Implemented GitHub Actions and Jenkins CI/CD pipelines with integrated security checks, as well as Prometheus and Grafana for real-time monitoring, achieving a 72-hour reduction in mean time to resolution for critical system incidents.`,
      ],
    },
    {
      organization: "PARBTECH SOLUTIONS",
      title: "Linux System Engineer",
      date: "January 2019 - January 2021",
      details: [
        `Streamlined deployment processes for software updates, resulting in a 21% reduction in downtime and a 30% increase in productivity.`,
        `Enhanced system performance by optimizing Linux server configurations and implementing efficient monitoring tools.`,
        `Collaborated with development teams to design and implement scalable infrastructure solutions that supported company growth and demand.`,
        `Maintained high-availability environments by configuring load balancers, clustering solutions, and failover mechanisms, ensuring reliable and continuous service delivery.`,
      ],
    },
  ],
  projects: [
    {
      title: "DevOps Full-Stack Bank Application",
      duration: "July - Nov 2024",
      desc: `Built and deployed a full-stack bank application using Docker, Kubernetes, Helm, and IaC tools like Terraform and as well using CI/CD tool like Github Actions, and Jenkins.`,
    },
    {
      title: "Netflix Clone on AWS",
      duration: "Jun - Oct 2023",
      desc: `Set up a DevSecOps environment with CI/CD, security integration, monitoring, and GitOps principles for a Netflix clone on AWS.`,
    },
    {
      title: "Kubernetes Three-Tier Project",
      duration: "May - Aug 2022",
      desc: `Built a three-tier architecture on AWS EKS using Terraform, ArgoCD, Helm, Prometheus, Grafana, and Jenkins.`,
    },
  ],
  accomplishments: [
    {
      title: "Cloud Migration Expert",
      desc: "Led the transition from on-premises setups to the cloud, achieving scalable, efficient operations.",
    },
    {
      title: "CI/CD Pipeline Architect",
      desc: "Designed scalable CI/CD pipelines, streamlining development and deployment processes.",
    },
    {
      title: "Infrastructure Architect",
      desc: "Built infrastructure solutions tailored to specific business needs.",
    },
    {
      title: "Platform Transition Pro",
      desc: "Led application migrations between platforms, optimizing performance and reliability.",
    },
    {
      title: "Infrastructure as Code Advocate",
      desc: "Skilled in codifying infrastructure using Terraform, simplifying deployment and management.",
    },
    {
      title: "Security Champion",
      desc: "Secured infrastructures and applications, delivering comprehensive security reporting to protect assets.",
    },
    {
      title: "Cost Optimization Specialist",
      desc: "Implemented strategies to reduce cloud costs, enhancing efficiency without sacrificing performance.",
    },
  ],
  education: [
    {
      alma: "Evangelical Presbyterian University College",
      duration: "2010 - 2014",
      std: "Bachelor of Science: Business Administration",
      score: "71.00%",
    },
  ],
  certifications: [],
  events: [],
};

