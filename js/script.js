const milestoneData = JSON.parse(jesonData).data;

//  Loading Milestone

function milestoneListload() {
  const milestoneElement = document.querySelector('.milestoneList');
  milestoneElement.innerHTML = `${milestoneData
    .map(function (milestonenameCall) {
      return `
    <div class="milestoneLearn border_b" id="${milestonenameCall._id}">
    <div class="mainMilestoneName">
      <div class="checkbox">
        <input type="checkbox" name="checkbox" id="" onclick="checkdFunc(this, ${
          milestonenameCall._id
        })" />
      </div>
      <div onclick="openhiddenFunc(this, ${milestonenameCall._id})">
        <p>
         ${milestonenameCall.name}
          <span> &nbsp;<i class="fa-solid fa-angle-down"></i></span>
        </p>
      </div>
    </div>
    <div class="subMilestoneName">
    ${milestonenameCall.modules
      .map(function (subModule) {
        return `
      <div class="module border_b">
        <p>${subModule.name}</p>
      </div>
    `;
      })
      .join('')}
    </div>
  </div>
    `;
    })
    .join('')}`;
}

function openhiddenFunc(openMilestoneElement, imageId) {
  const currentPanel = openMilestoneElement.parentNode.nextElementSibling;
  const showRemovePanel = document.querySelector('.show');
  if (!currentPanel.classList.contains('show') && showRemovePanel)
    showRemovePanel.classList.remove('show');
  currentPanel.classList.toggle('show');

  const activeFunc = document.querySelector('.active');
  if (!openMilestoneElement.classList.contains('active') && activeFunc) {
    activeFunc.classList.remove('active');
  }
  openMilestoneElement.classList.toggle('active');

  milestoneImage(imageId);
}

function milestoneImage(imageId) {
  const imageClassCall = document.querySelector('.milestoneImage');
  const videoHeading = document.querySelector('.videoHeading');
  const videoDetails = document.querySelector('.videoDetails');
  imageClassCall.style.opacity = '0';
  imageClassCall.src = milestoneData[imageId].image;
  videoHeading.innerText = milestoneData[imageId].name;
  videoDetails.innerText = milestoneData[imageId].description;
}

const imageClassCall = document.querySelector('.milestoneImage');
imageClassCall.onload = function () {
  this.style.opacity = '1';
};

function checkdFunc(checkbox, id) {
  const milestoneLearnList = document.querySelector('.milestoneList');
  const milestoneDoneList = document.querySelector('.milestoneLearnDone');
  const checkdItem = document.getElementById(id);

  if (checkbox.checked) {
    milestoneLearnList.removeChild(checkdItem);
    milestoneDoneList.appendChild(checkdItem);
  } else {
    milestoneLearnList.appendChild(checkdItem);
    milestoneDoneList.removeChild(checkdItem);
  }
}
milestoneListload();
