import "./style/Dashboard_2.css";
const Dash_main = () => {
  return (
    <body>
      <div class="sidebar">
        <div class="logo-details">
          <div class="logo_name">DNS Threat Intelligence</div>
          <i class="bx bx-menu" id="btn"></i>
        </div>
        <ul class="nav-list">
          <li>
            <a href="index.html">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Dashboard</span>
            </a>
            <span class="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-user"></i>
              <span class="links_name">User</span>
            </a>
            <span class="tooltip">User</span>
          </li>
          <li>
            <a href="query.html">
              <i class="bx bx-chat"></i>
              <span class="links_name">Query</span>
            </a>
            <span class="tooltip">Query</span>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="links_name">Analytics</span>
            </a>
            <span class="tooltip">Analytics</span>
          </li>
          <li>
            <a href="settings.html">
              <i class="bx bx-cog"></i>
              <span class="links_name">Setting</span>
            </a>
            <span class="tooltip">Setting</span>
          </li>
          <li class="profile">
            <div class="profile-details">
              <div class="name_job">
                <div class="name">&copy 2024 DNS Threat</div>
                <div class="name">Intelligence</div>
              </div>
            </div>
            <i class="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
      <section class="home-section">
        <div class="tab">
          <button
            class="tablinks active"
            onclick="openTab(event, 'check-url-tab')"
          >
            Check URL
          </button>
          <button class="tablinks" onclick="openTab(event, 'check-file-tab')">
            Check File
          </button>
        </div>

        <div id="check-url-tab" class="tabcontent active">
          <div class="text">Check URL</div>
          <div class="input-container">
            <label for="url">Enter the URL here:</label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="https://example.com"
            />
            <button onclick="checkURL()">Check</button>
          </div>
        </div>

        <div id="check-file-tab" class="tabcontent">
          <div class="text">Check File</div>
          <div class="input-container">
            <label for="url">Upload the File here:</label>
            <input type="file" id="fileInput" />
            <button onclick="checkFile()">Check</button>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Dash_main;
