const MISSIONS = [
  { target: "고등학생", topic: "눈 건강", detail: "디지털 기기 사용 중 눈의 휴식 습관을 돕는" },
  { target: "고등학생", topic: "바른 자세", detail: "오래 앉아 공부할 때 바른 자세 실천을 돕는" },
  { target: "고등학생", topic: "청력 보호", detail: "이어폰 사용 습관을 점검하고 청력을 보호하는" },
  { target: "고등학생", topic: "응급처치 학습", detail: "학교생활에 필요한 기본 응급처치를 익히는" },
  { target: "고등학생", topic: "구강 건강", detail: "규칙적인 양치와 구강 관리 습관을 돕는" },
  { target: "어린이", topic: "올바른 손 씻기", detail: "감염 예방을 위한 손 씻기 습관을 길러 주는" },
  { target: "어린이", topic: "치아 관리", detail: "즐겁게 양치 습관을 형성하도록 돕는" },
  { target: "어린이", topic: "시력 보호", detail: "책과 화면을 볼 때 건강한 눈 사용 습관을 돕는" },
  { target: "어린이", topic: "알레르기 관리", detail: "알레르기 유발 요인을 알고 안전하게 대처하도록 돕는" },
  { target: "어린이", topic: "병원 이용 안내", detail: "병원 방문 과정과 진료 예절을 쉽게 알려 주는" },
  { target: "어르신", topic: "낙상 예방", detail: "생활 속 위험 요소를 확인하고 낙상을 예방하는" },
  { target: "어르신", topic: "복약 관리", detail: "복용 시간과 주의사항 확인을 돕는" },
  { target: "어르신", topic: "청력 관리", detail: "일상 속 청력 변화를 살피고 보호 습관을 돕는" },
  { target: "어르신", topic: "병원 이용", detail: "진료 준비와 병원 이용 과정을 안내하는" },
  { target: "어르신", topic: "인지 건강", detail: "일상에서 기억력과 인지 활동을 꾸준히 돕는" },
  { target: "직장인", topic: "거북목 예방", detail: "컴퓨터 작업 중 목과 어깨 자세 관리를 돕는" },
  { target: "직장인", topic: "눈 피로 관리", detail: "장시간 화면 사용으로 인한 눈의 피로 완화를 돕는" },
  { target: "직장인", topic: "손목 건강", detail: "키보드와 마우스 사용 시 손목 부담을 줄이는" },
  { target: "직장인", topic: "직장 내 응급상황", detail: "직장에서 발생할 수 있는 응급상황 대처를 돕는" },
  { target: "운동선수", topic: "부상 예방", detail: "훈련 전후 몸 상태를 확인하고 부상을 예방하는" },
  { target: "운동선수", topic: "수분 섭취", detail: "운동 강도에 맞는 수분 보충 습관을 돕는" },
  { target: "운동선수", topic: "회복 관리", detail: "훈련 후 안전한 회복 습관 형성을 돕는" },
  { target: "운동선수", topic: "발 건강", detail: "훈련 중 발의 상태를 살피고 부상을 예방하는" },
  { target: "재활 환자", topic: "재활 운동 지원", detail: "정해진 재활 동작을 안전하게 꾸준히 실천하도록 돕는" },
  { target: "재활 환자", topic: "통증 기록", detail: "일상 속 통증 변화를 기록하고 진료 시 전달하도록 돕는" },
  { target: "재활 환자", topic: "보행 훈련", detail: "단계별 보행 연습과 안전 확인을 돕는" },
  { target: "재활 환자", topic: "관절 가동 범위", detail: "관절 움직임의 변화를 안전하게 기록하도록 돕는" },
  { target: "시각 장애인", topic: "복약 정보 확인", detail: "음성으로 약의 종류와 복용 정보를 확인하도록 돕는" },
  { target: "시각 장애인", topic: "병원 길 찾기", detail: "병원 안에서 진료 장소를 쉽게 찾도록 돕는" },
  { target: "청각 장애인", topic: "진료 의사소통", detail: "진료 과정에서 의료진과 원활히 소통하도록 돕는" },
  { target: "휠체어 사용자", topic: "접근 가능한 병원 찾기", detail: "이동 편의시설이 갖춰진 의료기관 이용을 돕는" },
  { target: "임산부", topic: "산전 진료 일정", detail: "산전 진료 일정과 준비사항 확인을 돕는" },
  { target: "보호자", topic: "환자 돌봄 기록", detail: "환자의 상태와 돌봄 내용을 빠짐없이 기록하도록 돕는" },
  { target: "야간 근무자", topic: "생체 리듬 관리", detail: "교대 근무 중 건강한 생활 리듬 형성을 돕는" },
  { target: "요리 종사자", topic: "화상 예방", detail: "조리 중 화상 위험을 확인하고 예방하도록 돕는" },
  { target: "배달 종사자", topic: "안전 운전과 피로 관리", detail: "이동 중 피로 신호를 확인하고 안전한 휴식을 돕는" }
];

const CONFIRMED_STORAGE_KEY = "aiHealthcareConfirmedMission";
const PICKER_STORAGE_KEY = "aiHealthcarePickerState";
const PLAN_STORAGE_KEY = "aiHealthcarePlanData";
const PROMPT_STORAGE_KEY = "aiHealthcarePromptData";
const DESIGN_STORAGE_KEY = "aiHealthcareDesignLabData";
const PRESENTATION_STORAGE_KEY = "aiHealthcarePresentationData";
const SLOT_DURATION = 2600;
const PLAN_QUESTIONS = [
  "이 앱을 사용할 사람은 어떤 불편함을 겪고 있을까?",
  "그 문제가 생기는 이유는 무엇일까?",
  "이 앱이 반드시 해결해야 할 문제 한 가지는?",
  "그 문제를 해결하기 위해 AI는 어떤 일을 해야 할까?",
  "기존의 일반적인 앱과 무엇이 다를까?"
];

const elements = {
  idleView: document.querySelector("#idleView"),
  resultView: document.querySelector("#resultView"),
  finalView: document.querySelector("#finalView"),
  resultKicker: document.querySelector("#resultKicker"),
  missionPair: document.querySelector("#missionPair"),
  targetText: document.querySelector("#targetText"),
  topicText: document.querySelector("#topicText"),
  missionSentence: document.querySelector("#missionSentence"),
  finalMission: document.querySelector("#finalMission"),
  drawButton: document.querySelector("#drawButton"),
  drawButtonText: document.querySelector("#drawButtonText"),
  confirmButton: document.querySelector("#confirmButton"),
  restartButton: document.querySelector("#restartButton"),
  actionArea: document.querySelector("#actionArea"),
  drawGuide: document.querySelector("#drawGuide"),
  statusBadge: document.querySelector("#statusBadge"),
  chanceIndicator: document.querySelector("#chanceIndicator"),
  chanceDots: [...document.querySelectorAll(".chance-dot")],
  chanceText: document.querySelector(".chance-text"),
  pickerScreen: document.querySelector("#pickerScreen"),
  plannerScreen: document.querySelector("#plannerScreen"),
  planResultScreen: document.querySelector("#planResultScreen"),
  plannerStartButton: document.querySelector("#plannerStartButton"),
  plannerBackButton: document.querySelector("#plannerBackButton"),
  plannerTarget: document.querySelector("#plannerTarget"),
  plannerTopic: document.querySelector("#plannerTopic"),
  appNameInput: document.querySelector("#appNameInput"),
  appNameStatus: document.querySelector("#appNameStatus"),
  appNameCard: document.querySelector(".app-name-card"),
  plannerForm: document.querySelector("#plannerForm"),
  answerFields: [...document.querySelectorAll("[data-answer-index]")],
  questionCards: [...document.querySelectorAll("[data-question-index]")],
  hintButtons: [...document.querySelectorAll(".hint-button")],
  hintBoxes: [...document.querySelectorAll(".hint-box")],
  progressText: document.querySelector("#progressText"),
  progressPercent: document.querySelector("#progressPercent"),
  progressBar: document.querySelector("#progressBar"),
  progressTrack: document.querySelector(".progress-track"),
  progressGuide: document.querySelector("#progressGuide"),
  completePlanButton: document.querySelector("#completePlanButton"),
  completedMission: document.querySelector("#completedMission"),
  completedAppName: document.querySelector("#completedAppName"),
  completedAnswers: document.querySelector("#completedAnswers"),
  copyPlanButton: document.querySelector("#copyPlanButton"),
  editPlanButton: document.querySelector("#editPlanButton"),
  copyStatus: document.querySelector("#copyStatus"),
  promptStartButton: document.querySelector("#promptStartButton"),
  promptScreen: document.querySelector("#promptScreen"),
  promptResultScreen: document.querySelector("#promptResultScreen"),
  promptBackButton: document.querySelector("#promptBackButton"),
  promptMission: document.querySelector("#promptMission"),
  promptAppName: document.querySelector("#promptAppName"),
  promptResultAppName: document.querySelector("#promptResultAppName"),
  promptPlanSummary: document.querySelector("#promptPlanSummary"),
  promptForm: document.querySelector("#promptForm"),
  promptRoleInputs: [...document.querySelectorAll('[name="prompt-role"]')],
  promptGoal: document.querySelector("#promptGoal"),
  promptRequest: document.querySelector("#promptRequest"),
  promptConditions: document.querySelector("#promptConditions"),
  promptFormatInputs: [...document.querySelectorAll('[name="prompt-format"]')],
  promptExampleButtons: [...document.querySelectorAll(".prompt-example-button")],
  promptExamplePanels: [...document.querySelectorAll(".prompt-example-panel")],
  promptProgressText: document.querySelector("#promptProgressText"),
  promptProgressBar: document.querySelector("#promptProgressBar"),
  promptProgressTrack: document.querySelector("#promptProgressTrack"),
  completePromptButton: document.querySelector("#completePromptButton"),
  finalPromptText: document.querySelector("#finalPromptText"),
  copyPromptButton: document.querySelector("#copyPromptButton"),
  editPromptButton: document.querySelector("#editPromptButton"),
  promptCopyStatus: document.querySelector("#promptCopyStatus"),
  feedbackStartButton: document.querySelector("#feedbackStartButton"),
  designLabScreen: document.querySelector("#designLabScreen"),
  designAppName: document.querySelector("#designAppName"),
  designLabBackButton: document.querySelector("#designLabBackButton"),
  feedbackStageIndicator: document.querySelector("#feedbackStageIndicator"),
  designStageIndicator: document.querySelector("#designStageIndicator"),
  feedbackSourcePrompt: document.querySelector("#feedbackSourcePrompt"),
  copyFeedbackPromptButton: document.querySelector("#copyFeedbackPromptButton"),
  feedbackCopyStatus: document.querySelector("#feedbackCopyStatus"),
  feedbackForm: document.querySelector("#feedbackForm"),
  feedbackShortcoming: document.querySelector("#feedbackShortcoming"),
  feedbackImprovement: document.querySelector("#feedbackImprovement"),
  feedbackProgressText: document.querySelector("#feedbackProgressText"),
  continueToDesignButton: document.querySelector("#continueToDesignButton"),
  designDecisionSection: document.querySelector("#designDecisionSection"),
  designForm: document.querySelector("#designForm"),
  designColorInputs: [...document.querySelectorAll('[name="design-color"]')],
  customDesignColor: document.querySelector("#customDesignColor"),
  designMoodInputs: [...document.querySelectorAll('[name="design-mood"]')],
  designProgressText: document.querySelector("#designProgressText"),
  generateDesignPromptButton: document.querySelector("#generateDesignPromptButton"),
  designPromptResult: document.querySelector("#designPromptResult"),
  designPromptText: document.querySelector("#designPromptText"),
  copyDesignPromptButton: document.querySelector("#copyDesignPromptButton"),
  designCopyStatus: document.querySelector("#designCopyStatus"),
  designChecks: [...document.querySelectorAll("[data-design-check]")],
  fallbackLayoutText: document.querySelector("#fallbackLayoutText"),
  presentationStartButton: document.querySelector("#presentationStartButton"),
  presentationScreen: document.querySelector("#presentationScreen"),
  presentationBackButton: document.querySelector("#presentationBackButton"),
  finalAppPromptText: document.querySelector("#finalAppPromptText"),
  copyFinalAppPromptButton: document.querySelector("#copyFinalAppPromptButton"),
  finalAppCopyStatus: document.querySelector("#finalAppCopyStatus"),
  appPromptReadyBadge: document.querySelector("#appPromptReadyBadge"),
  finalOutputAppName: document.querySelector("#finalOutputAppName"),
  editAppNameButton: document.querySelector("#editAppNameButton"),
  summaryImagePromptText: document.querySelector("#summaryImagePromptText"),
  copySummaryImagePromptButton: document.querySelector("#copySummaryImagePromptButton"),
  summaryImageCopyStatus: document.querySelector("#summaryImageCopyStatus"),
  summaryPromptReadyBadge: document.querySelector("#summaryPromptReadyBadge")
};

let currentMission = null;
let drawCount = 0;
let isAnimating = false;
let slotTimer = null;
let planView = "final";
let promptView = "plan-result";
let designLabView = "prompt-result";
let designLabPhase = "feedback";
let finalOutputView = "design-lab";

function makeSentence(mission) {
  return `${mission.target}을(를) 위한 ${mission.topic} AI 헬스케어 앱`;
}

function isSameMission(first, second) {
  return Boolean(first && second && first.target === second.target && first.topic === second.topic);
}

function findValidMission(mission) {
  if (!mission || typeof mission.target !== "string" || typeof mission.topic !== "string") return null;
  return MISSIONS.find((item) => isSameMission(item, mission)) || null;
}

function getRandomMission(excludedMission = null) {
  const candidates = excludedMission
    ? MISSIONS.filter((mission) => !isSameMission(mission, excludedMission))
    : MISSIONS;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function updateChances() {
  const chancesLeft = Math.max(0, 2 - drawCount);
  elements.chanceDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index < chancesLeft);
  });
  elements.chanceText.textContent = `기회 ${chancesLeft}회`;
  elements.chanceIndicator.setAttribute("aria-label", `남은 뽑기 기회 ${chancesLeft}회`);
}

function savePickerState() {
  try {
    localStorage.setItem(PICKER_STORAGE_KEY, JSON.stringify({
      version: 1,
      drawCount,
      mission: currentMission
    }));
  } catch (error) {
    console.warn("뽑기 진행 상태를 저장하지 못했습니다.", error);
  }
}

function clearPickerState() {
  try {
    localStorage.removeItem(PICKER_STORAGE_KEY);
  } catch (error) {
    console.warn("뽑기 진행 상태를 삭제하지 못했습니다.", error);
  }
}

function displaySlotMission(mission) {
  elements.targetText.textContent = mission.target;
  elements.topicText.textContent = mission.topic;
  elements.missionSentence.textContent = makeSentence(mission);
}

function prepareResultView() {
  elements.idleView.hidden = true;
  elements.resultView.hidden = false;
  elements.finalView.hidden = true;
}

function setAnimationControls(active) {
  isAnimating = active;
  elements.drawButton.disabled = active;
  elements.confirmButton.disabled = active;
  elements.drawButton.setAttribute("aria-busy", String(active));
  elements.resultView.setAttribute("aria-live", active ? "off" : "polite");
  elements.missionPair.classList.toggle("is-spinning", active);
  elements.drawButton.classList.toggle("is-shuffling", active);

  if (active) {
    elements.drawButton.hidden = false;
    elements.confirmButton.hidden = true;
    elements.drawButtonText.textContent = "미션 찾는 중...";
    elements.drawGuide.textContent = "대상과 건강 문제를 조합하고 있어요.";
    elements.statusBadge.textContent = "SHUFFLING";
    elements.statusBadge.className = "status-badge is-shuffling";
    elements.resultKicker.textContent = "MATCHING MISSION...";
  }
}

function showMission(mission, animateEntrance = true) {
  prepareResultView();
  displaySlotMission(mission);
  setAnimationControls(false);
  elements.resultKicker.textContent = "YOUR MISSION";
  elements.statusBadge.textContent = drawCount === 1 ? "1ST PICK" : "FINAL PICK";
  elements.statusBadge.className = "status-badge is-drawn";
  elements.confirmButton.hidden = false;
  elements.resultView.classList.toggle("reveal-result", animateEntrance);

  if (animateEntrance) {
    window.setTimeout(() => elements.resultView.classList.remove("reveal-result"), 650);
  }

  if (drawCount === 1) {
    elements.drawButton.hidden = false;
    elements.drawButtonText.textContent = "한 번 더 뽑기";
    elements.drawGuide.textContent = "이대로 확정하거나 한 번 더 뽑을 수 있어요.";
  } else {
    elements.drawButton.hidden = true;
    elements.drawGuide.textContent = "마지막 결과예요. 이 주제로 확정해 주세요.";
  }
  updateChances();
}

function finishSlotAnimation() {
  slotTimer = null;
  showMission(currentMission);
}

function runSlotAnimation() {
  const startedAt = performance.now();
  prepareResultView();
  setAnimationControls(true);
  updateChances();

  function tick(now) {
    const elapsed = now - startedAt;
    if (elapsed >= SLOT_DURATION) {
      finishSlotAnimation();
      return;
    }

    displaySlotMission(getRandomMission());
    const progress = elapsed / SLOT_DURATION;
    const nextDelay = 55 + Math.pow(progress, 2.4) * 290;
    slotTimer = window.setTimeout(() => window.requestAnimationFrame(tick), nextDelay);
  }

  window.requestAnimationFrame(tick);
}

function drawMission() {
  if (isAnimating || drawCount >= 2) return;

  currentMission = getRandomMission(currentMission);
  drawCount += 1;
  savePickerState();
  runSlotAnimation();
}

function saveConfirmedMission(mission) {
  try {
    localStorage.setItem(CONFIRMED_STORAGE_KEY, JSON.stringify(mission));
  } catch (error) {
    console.warn("확정 미션을 브라우저에 저장하지 못했습니다.", error);
  }
}

function showFinal(mission, animate = true) {
  currentMission = mission;
  elements.idleView.hidden = true;
  elements.resultView.hidden = true;
  elements.finalView.hidden = false;
  elements.actionArea.hidden = true;
  elements.chanceIndicator.hidden = true;
  elements.restartButton.hidden = false;
  elements.finalMission.textContent = makeSentence(mission);
  elements.statusBadge.textContent = "CONFIRMED";
  elements.statusBadge.className = "status-badge is-final";
  elements.finalView.classList.toggle("is-confirmed", animate);
  syncPlannerMission(mission);
}

function confirmMission() {
  if (!currentMission || isAnimating) return;
  saveConfirmedMission(currentMission);
  clearPickerState();
  showFinal(currentMission);
}

function restart() {
  const hasPlanData = Boolean(localStorage.getItem(PLAN_STORAGE_KEY));
  const hasPromptData = Boolean(localStorage.getItem(PROMPT_STORAGE_KEY));
  const hasDesignData = Boolean(localStorage.getItem(DESIGN_STORAGE_KEY));
  const hasPresentationData = Boolean(localStorage.getItem(PRESENTATION_STORAGE_KEY));
  const message = hasPlanData || hasPromptData || hasDesignData || hasPresentationData
    ? "다시 시작하면 확정 미션, 기획서, 프롬프트와 디자인 활동이 모두 삭제됩니다. 함께 초기화할까요?"
    : "확정 미션을 지우고 랜덤 뽑기부터 다시 시작할까요?";
  if (!window.confirm(message)) return;

  if (slotTimer !== null) window.clearTimeout(slotTimer);
  try {
    localStorage.removeItem(CONFIRMED_STORAGE_KEY);
    localStorage.removeItem(PICKER_STORAGE_KEY);
    localStorage.removeItem(PLAN_STORAGE_KEY);
    localStorage.removeItem(PROMPT_STORAGE_KEY);
    localStorage.removeItem(DESIGN_STORAGE_KEY);
    localStorage.removeItem(PRESENTATION_STORAGE_KEY);
  } catch (error) {
    console.warn("저장된 미션을 삭제하지 못했습니다.", error);
  }
  window.location.reload();
}

function restoreState() {
  try {
    const confirmed = localStorage.getItem(CONFIRMED_STORAGE_KEY);
    if (confirmed) {
      const confirmedMission = findValidMission(JSON.parse(confirmed));
      if (confirmedMission) {
        showFinal(confirmedMission, false);
        return;
      }
      localStorage.removeItem(CONFIRMED_STORAGE_KEY);
    }

    const pickerState = localStorage.getItem(PICKER_STORAGE_KEY);
    if (!pickerState) return;

    const parsed = JSON.parse(pickerState);
    const restoredMission = findValidMission(parsed.mission);
    const restoredCount = Number(parsed.drawCount);
    if (restoredMission && (restoredCount === 1 || restoredCount === 2)) {
      currentMission = restoredMission;
      drawCount = restoredCount;
      showMission(currentMission, false);
      return;
    }
    localStorage.removeItem(PICKER_STORAGE_KEY);
  } catch (error) {
    localStorage.removeItem(CONFIRMED_STORAGE_KEY);
    localStorage.removeItem(PICKER_STORAGE_KEY);
    localStorage.removeItem(PLAN_STORAGE_KEY);
    localStorage.removeItem(PROMPT_STORAGE_KEY);
    localStorage.removeItem(DESIGN_STORAGE_KEY);
    localStorage.removeItem(PRESENTATION_STORAGE_KEY);
    console.warn("저장된 미션 상태를 불러오지 못했습니다.", error);
  }
}

function showScreen(screenName, scrollToTop = true) {
  elements.pickerScreen.hidden = screenName !== "picker";
  elements.plannerScreen.hidden = screenName !== "planner";
  elements.planResultScreen.hidden = screenName !== "result";
  elements.promptScreen.hidden = screenName !== "prompt";
  elements.promptResultScreen.hidden = screenName !== "prompt-result";
  elements.designLabScreen.hidden = screenName !== "design-lab";
  elements.presentationScreen.hidden = screenName !== "presentation";
  if (scrollToTop && typeof window.scrollTo === "function") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function getPlanAnswers() {
  return elements.answerFields.map((field) => field.value);
}

function getAppName() {
  return elements.appNameInput.value.trim();
}

function syncAppNameDisplays() {
  const appName = getAppName();
  const displayName = appName || "앱 이름 미정";
  [
    elements.completedAppName,
    elements.promptAppName,
    elements.promptResultAppName,
    elements.designAppName,
    elements.finalOutputAppName
  ].forEach((element) => {
    element.textContent = displayName;
  });
}

function getAnsweredCount() {
  return getPlanAnswers().filter((answer) => answer.trim().length > 0).length;
}

function savePlanData(nextView = planView) {
  if (!currentMission) return;
  planView = nextView;
  try {
    localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify({
      version: 3,
      mission: currentMission,
      appName: elements.appNameInput.value,
      answers: getPlanAnswers(),
      view: planView
    }));
  } catch (error) {
    console.warn("기획서 내용을 저장하지 못했습니다.", error);
  }
}

function updatePlannerProgress() {
  const answers = getPlanAnswers();
  const answeredCount = answers.filter((answer) => answer.trim().length > 0).length;
  const hasAppName = getAppName().length > 0;
  const percent = answeredCount * 20;

  elements.questionCards.forEach((card, index) => {
    const isComplete = answers[index].trim().length > 0;
    card.classList.toggle("is-complete", isComplete);
    card.querySelector(".question-status").textContent = isComplete ? "작성 완료" : "미작성";
  });

  elements.progressText.textContent = `${answeredCount} / 5 작성`;
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressBar.style.width = `${percent}%`;
  elements.progressTrack.setAttribute("aria-valuenow", String(answeredCount));
  elements.completePlanButton.disabled = answeredCount < 3 || !hasAppName;
  elements.appNameStatus.textContent = hasAppName
    ? `“${getAppName()}” 이름을 모든 단계에서 사용해요.`
    : "앱 이름을 직접 작성해 주세요.";
  elements.appNameStatus.classList.toggle("is-complete", hasAppName);
  elements.appNameCard.classList.toggle("is-complete", hasAppName);
  syncAppNameDisplays();

  if (!hasAppName) {
    elements.progressGuide.textContent = answeredCount >= 3
      ? "질문 기준을 채웠어요. 앱 이름을 작성하면 기획서를 완성할 수 있어요."
      : "앱 이름과 최소 3개 질문을 작성하면 완성할 수 있어요.";
  } else if (answeredCount === 5) {
    elements.progressGuide.textContent = "5개 질문을 모두 작성했어요. 기획서를 완성해 보세요!";
  } else if (answeredCount >= 3) {
    elements.progressGuide.textContent = "최소 통과 기준을 채웠어요. 더 탄탄한 기획을 위해 5개 모두 작성해 보세요.";
  } else {
    elements.progressGuide.textContent = "최소 3개를 작성하면 완성할 수 있어요. 5개 모두 작성해 보길 권장해요.";
  }
}

function getMissionHints(mission) {
  return [
    `${mission.target}이(가) ${mission.topic}을 관리하는 하루 중 가장 불편한 순간을 떠올려 보세요.`,
    "생활 환경, 반복되는 습관, 정보 부족처럼 문제가 계속되는 원인을 나누어 생각해 보세요.",
    `여러 불편 중 ${mission.topic}과 가장 직접적으로 연결된 한 가지를 골라 보세요.`,
    "AI가 상황을 확인하고, 필요한 정보를 구분하고, 알맞은 때에 알려 주는 과정을 생각해 보세요.",
    `${mission.target}의 상황에 따라 안내나 기능이 어떻게 달라질 수 있을지 생각해 보세요.`
  ];
}

function syncPlannerMission(mission) {
  elements.plannerTarget.textContent = mission.target;
  elements.plannerTopic.textContent = mission.topic;
  const hints = getMissionHints(mission);
  elements.hintBoxes.forEach((hintBox, index) => {
    hintBox.textContent = hints[index];
  });
}

function openPlanner() {
  if (!currentMission) return;
  syncPlannerMission(currentMission);
  updatePlannerProgress();
  savePlanData("planner");
  showScreen("planner");
}

function returnToConfirmedMission() {
  savePlanData("final");
  showScreen("picker");
}

function renderCompletedPlan() {
  const answers = getPlanAnswers();
  syncAppNameDisplays();
  elements.completedMission.textContent = makeSentence(currentMission);
  elements.completedAnswers.replaceChildren();

  PLAN_QUESTIONS.forEach((question, index) => {
    const item = document.createElement("article");
    item.className = "completed-answer";

    const number = document.createElement("span");
    number.textContent = `QUESTION ${String(index + 1).padStart(2, "0")}`;
    const heading = document.createElement("h3");
    heading.textContent = question;
    const answer = document.createElement("p");
    const answerText = answers[index].trim();
    answer.textContent = answerText || "작성하지 않음";
    answer.classList.toggle("is-empty", !answerText);

    item.append(number, heading, answer);
    elements.completedAnswers.append(item);
  });
}

function completePlan(event) {
  event.preventDefault();
  if (getAnsweredCount() < 3 || !getAppName() || !currentMission) return;
  renderCompletedPlan();
  savePlanData("result");
  showScreen("result");
}

function editPlan() {
  savePlanData("planner");
  showScreen("planner");
}

function buildPlainTextPlan() {
  const answers = getPlanAnswers();
  const lines = [
    "AI 헬스케어 앱 기획서",
    "",
    `[앱 이름] ${getAppName()}`,
    `[확정 미션] ${makeSentence(currentMission)}`,
    ""
  ];

  PLAN_QUESTIONS.forEach((question, index) => {
    lines.push(`${index + 1}. ${question}`);
    lines.push(answers[index].trim() || "작성하지 않음");
    lines.push("");
  });
  return lines.join("\n").trim();
}

function fallbackCopy(text) {
  const temporary = document.createElement("textarea");
  temporary.value = text;
  temporary.setAttribute("readonly", "");
  temporary.style.position = "fixed";
  temporary.style.opacity = "0";
  document.body.append(temporary);
  temporary.select();
  const copied = document.execCommand("copy");
  temporary.remove();
  if (!copied) throw new Error("copy command failed");
}

async function copyPlan() {
  const text = buildPlainTextPlan();
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    elements.copyStatus.textContent = "기획서를 일반 텍스트로 복사했어요.";
    elements.copyPlanButton.textContent = "복사 완료 ✓";
    window.setTimeout(() => {
      elements.copyPlanButton.textContent = "기획서 복사하기";
    }, 1800);
  } catch (error) {
    elements.copyStatus.textContent = "복사하지 못했어요. 브라우저의 클립보드 권한을 확인해 주세요.";
    console.warn("기획서를 복사하지 못했습니다.", error);
  }
}

function restorePlanData() {
  try {
    const confirmed = findValidMission(JSON.parse(localStorage.getItem(CONFIRMED_STORAGE_KEY) || "null"));
    if (!confirmed) return;

    const saved = localStorage.getItem(PLAN_STORAGE_KEY);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (!isSameMission(parsed.mission, confirmed) || !Array.isArray(parsed.answers)) {
      localStorage.removeItem(PLAN_STORAGE_KEY);
      return;
    }

    elements.answerFields.forEach((field, index) => {
      field.value = typeof parsed.answers[index] === "string" ? parsed.answers[index] : "";
    });
    let restoredAppName = typeof parsed.appName === "string" ? parsed.appName : "";
    if (!restoredAppName.trim()) {
      try {
        const legacyPresentation = JSON.parse(localStorage.getItem(PRESENTATION_STORAGE_KEY) || "null");
        const legacyName = legacyPresentation && legacyPresentation.fields
          ? legacyPresentation.fields.appName
          : "";
        if (typeof legacyName === "string" && legacyName.trim()) restoredAppName = legacyName;
      } catch (error) {
        console.warn("이전 발표 자료의 앱 이름을 확인하지 못했습니다.", error);
      }
    }
    elements.appNameInput.value = restoredAppName;
    updatePlannerProgress();
    if (!(typeof parsed.appName === "string" && parsed.appName.trim()) && restoredAppName.trim()) {
      savePlanData(parsed.view || "planner");
    }

    if (parsed.view === "planner") {
      planView = "planner";
      showScreen("planner", false);
    } else if (parsed.view === "result" && getAnsweredCount() >= 3 && getAppName()) {
      planView = "result";
      renderCompletedPlan();
      showScreen("result", false);
    } else if (!getAppName()) {
      planView = "planner";
      showScreen("planner", false);
    }
  } catch (error) {
    localStorage.removeItem(PLAN_STORAGE_KEY);
    console.warn("저장된 기획서를 불러오지 못했습니다.", error);
  }
}

function getSelectedValue(inputs) {
  const selected = inputs.find((input) => input.checked);
  return selected ? selected.value : "";
}

function getPromptFormData() {
  return {
    role: getSelectedValue(elements.promptRoleInputs),
    goal: elements.promptGoal.value,
    request: elements.promptRequest.value,
    conditions: elements.promptConditions.value,
    format: getSelectedValue(elements.promptFormatInputs)
  };
}

function getCompletedPromptStepCount(data = getPromptFormData()) {
  return [data.role, data.goal, data.request, data.conditions, data.format]
    .filter((value) => typeof value === "string" && value.trim().length > 0)
    .length;
}

function updatePromptProgress() {
  const completedCount = getCompletedPromptStepCount();
  const percent = completedCount * 20;
  elements.promptProgressText.textContent = `${completedCount} / 5 완료`;
  elements.promptProgressBar.style.width = `${percent}%`;
  elements.promptProgressTrack.setAttribute("aria-valuenow", String(completedCount));
  elements.completePromptButton.disabled = completedCount < 5;
}

function savePromptData(nextView = promptView) {
  if (!currentMission) return;
  promptView = nextView;
  try {
    localStorage.setItem(PROMPT_STORAGE_KEY, JSON.stringify({
      version: 1,
      mission: currentMission,
      fields: getPromptFormData(),
      view: promptView
    }));
  } catch (error) {
    console.warn("프롬프트 작성 내용을 저장하지 못했습니다.", error);
  }
}

function renderPromptPlanSummary() {
  const answers = getPlanAnswers();
  syncAppNameDisplays();
  elements.promptMission.textContent = makeSentence(currentMission);
  elements.promptPlanSummary.replaceChildren();

  PLAN_QUESTIONS.forEach((question, index) => {
    const item = document.createElement("div");
    item.className = "plan-summary-item";
    const heading = document.createElement("strong");
    heading.textContent = `${index + 1}. ${question}`;
    const answer = document.createElement("p");
    const answerText = answers[index].trim();
    answer.textContent = answerText || "작성하지 않음";
    answer.classList.toggle("is-empty", !answerText);
    item.append(heading, answer);
    elements.promptPlanSummary.append(item);
  });
}

function openPromptBuilder() {
  if (!currentMission || getAnsweredCount() < 3 || !getAppName()) return;
  renderPromptPlanSummary();
  updatePromptProgress();
  savePromptData("prompt");
  showScreen("prompt");
}

function returnToPlanResult() {
  savePromptData("plan-result");
  renderCompletedPlan();
  showScreen("result");
}

function buildFinalPrompt() {
  const fields = getPromptFormData();
  const answers = getPlanAnswers();
  const lines = [
    `너는 ${fields.role}야.`,
    "",
    "[앱 이름]",
    getAppName(),
    "이 이름은 학생이 직접 정한 이름이므로 임의로 바꾸거나 다른 이름을 제안하지 마.",
    "",
    "[확정 미션]",
    makeSentence(currentMission),
    "",
    "[기획서 내용]"
  ];

  PLAN_QUESTIONS.forEach((question, index) => {
    const originalAnswer = answers[index];
    lines.push(`${index + 1}. ${question}`);
    lines.push(`답변: ${originalAnswer.trim() ? originalAnswer : "작성하지 않음"}`);
    lines.push("");
  });

  lines.push(
    "[목표]",
    fields.goal,
    "",
    "[요청]",
    fields.request,
    "",
    "[조건]",
    fields.conditions,
    "",
    "[출력 형식]",
    `${fields.format} 형식으로 답변해 줘.`,
    "",
    "[의료 안전 원칙]",
    "이 앱은 의료진의 실제 진단을 대신하지 않도록 기획해 줘. 진단이나 치료를 확정하지 말고, 필요한 경우 의료 전문가의 도움을 받도록 안내해 줘.",
    "",
    "내 아이디어를 무조건 대신 완성하지 말고, 장점과 부족한 점을 알려주고 스스로 개선할 질문 3개를 해줘."
  );

  return lines.join("\n");
}

function renderFinalPrompt() {
  renderPromptPlanSummary();
  elements.finalPromptText.textContent = buildFinalPrompt();
}

function completePrompt(event) {
  event.preventDefault();
  if (getCompletedPromptStepCount() < 5 || !getAppName() || !currentMission) return;
  renderFinalPrompt();
  savePromptData("prompt-result");
  showScreen("prompt-result");
}

function editPrompt() {
  renderPromptPlanSummary();
  savePromptData("prompt");
  showScreen("prompt");
}

async function copyPrompt() {
  const text = elements.finalPromptText.textContent;
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    elements.promptCopyStatus.textContent = "프롬프트를 복사했어요. ChatGPT 대화창에 직접 붙여넣어 보세요.";
    elements.copyPromptButton.textContent = "복사 완료 ✓";
    window.setTimeout(() => {
      elements.copyPromptButton.textContent = "프롬프트 복사하기";
    }, 1800);
  } catch (error) {
    elements.promptCopyStatus.textContent = "자동 복사에 실패했어요. 위 프롬프트를 클릭한 뒤 Ctrl+A, Ctrl+C로 직접 복사해 주세요.";
    elements.finalPromptText.focus();
    console.warn("프롬프트를 복사하지 못했습니다.", error);
  }
}

function restorePromptData() {
  try {
    const confirmed = findValidMission(JSON.parse(localStorage.getItem(CONFIRMED_STORAGE_KEY) || "null"));
    if (!confirmed) return;

    const saved = localStorage.getItem(PROMPT_STORAGE_KEY);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    const fields = parsed.fields;
    if (!isSameMission(parsed.mission, confirmed) || !fields || typeof fields !== "object") {
      localStorage.removeItem(PROMPT_STORAGE_KEY);
      return;
    }

    elements.promptRoleInputs.forEach((input) => {
      input.checked = input.value === fields.role;
    });
    elements.promptGoal.value = typeof fields.goal === "string" ? fields.goal : "";
    elements.promptRequest.value = typeof fields.request === "string" ? fields.request : "";
    elements.promptConditions.value = typeof fields.conditions === "string" ? fields.conditions : "";
    elements.promptFormatInputs.forEach((input) => {
      input.checked = input.value === fields.format;
    });
    updatePromptProgress();
    renderPromptPlanSummary();

    if (parsed.view === "prompt" && getAppName()) {
      promptView = "prompt";
      showScreen("prompt", false);
    } else if (parsed.view === "prompt-result" && getCompletedPromptStepCount() === 5 && getAppName()) {
      promptView = "prompt-result";
      renderFinalPrompt();
      showScreen("prompt-result", false);
    }
  } catch (error) {
    localStorage.removeItem(PROMPT_STORAGE_KEY);
    console.warn("저장된 프롬프트를 불러오지 못했습니다.", error);
  }
}

function isFeedbackComplete() {
  return elements.feedbackShortcoming.value.trim().length > 0
    && elements.feedbackImprovement.value.trim().length > 0;
}

function getDesignColor() {
  const customColor = elements.customDesignColor.value;
  return customColor.trim() ? customColor : getSelectedValue(elements.designColorInputs);
}

function getDesignLabData() {
  return {
    feedbackShortcoming: elements.feedbackShortcoming.value,
    feedbackImprovement: elements.feedbackImprovement.value,
    colorChoice: getSelectedValue(elements.designColorInputs),
    customColor: elements.customDesignColor.value,
    mood: getSelectedValue(elements.designMoodInputs),
    checks: elements.designChecks.map((checkbox) => checkbox.checked),
    fallbackLayout: elements.fallbackLayoutText.value
  };
}

function isDesignComplete(data = getDesignLabData()) {
  return [getDesignColor(), data.mood]
    .every((value) => typeof value === "string" && value.trim().length > 0);
}

function updateFeedbackProgress() {
  const complete = isFeedbackComplete();
  elements.continueToDesignButton.disabled = !complete;
  elements.feedbackProgressText.textContent = complete
    ? "두 질문을 모두 작성했어요. 이제 앱 디자인을 결정해 보세요."
    : "두 질문에 모두 답하면 디자인을 결정할 수 있어요.";
  elements.feedbackStageIndicator.classList.toggle("is-complete", complete && designLabPhase !== "feedback");
}

function updateDesignProgress() {
  const complete = isDesignComplete();
  elements.generateDesignPromptButton.disabled = !complete;
  elements.designProgressText.textContent = complete
    ? "디자인 조건을 모두 정했어요. 이미지 제작 프롬프트를 만들어 보세요."
    : "대표 색상과 디자인 분위기를 모두 정해 주세요.";
}

function saveDesignLabData(nextView = designLabView, nextPhase = designLabPhase) {
  if (!currentMission) return;
  designLabView = nextView;
  designLabPhase = nextPhase;
  try {
    localStorage.setItem(DESIGN_STORAGE_KEY, JSON.stringify({
      version: 1,
      mission: currentMission,
      view: designLabView,
      phase: designLabPhase,
      fields: getDesignLabData()
    }));
  } catch (error) {
    console.warn("피드백과 디자인 활동 내용을 저장하지 못했습니다.", error);
  }
}

function updateDesignLabStage() {
  const designStarted = designLabPhase === "design" || designLabPhase === "result";
  elements.feedbackStageIndicator.classList.toggle("is-active", !designStarted);
  elements.feedbackStageIndicator.classList.toggle("is-complete", designStarted);
  elements.designStageIndicator.classList.toggle("is-active", designStarted);
  elements.designDecisionSection.hidden = !designStarted;
  elements.designPromptResult.hidden = designLabPhase !== "result";
}

function renderFeedbackSourcePrompt() {
  syncAppNameDisplays();
  elements.feedbackSourcePrompt.textContent = buildFinalPrompt();
}

function openDesignLab() {
  if (!currentMission || !getAppName() || getCompletedPromptStepCount() < 5) return;
  renderFeedbackSourcePrompt();
  updateFeedbackProgress();
  updateDesignProgress();
  updateDesignLabStage();
  if (designLabPhase === "result") renderDesignPrompt();
  saveDesignLabData("design-lab", designLabPhase);
  showScreen("design-lab");
}

function returnToPromptResult() {
  saveDesignLabData("prompt-result", designLabPhase);
  renderFinalPrompt();
  showScreen("prompt-result");
}

async function copyActivityText(text, statusElement, button, focusElement, successMessage) {
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    const originalLabel = button.textContent;
    statusElement.textContent = successMessage;
    button.textContent = "복사 완료 ✓";
    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 1800);
  } catch (error) {
    statusElement.textContent = "자동 복사에 실패했어요. 위 텍스트를 클릭한 뒤 Ctrl+A, Ctrl+C로 직접 복사해 주세요.";
    focusElement.focus();
    console.warn("활동 텍스트를 복사하지 못했습니다.", error);
  }
}

function copyFeedbackPrompt() {
  return copyActivityText(
    elements.feedbackSourcePrompt.textContent,
    elements.feedbackCopyStatus,
    elements.copyFeedbackPromptButton,
    elements.feedbackSourcePrompt,
    "프롬프트를 복사했어요. 새 탭의 ChatGPT에 직접 붙여넣으세요."
  );
}

function continueToDesign(event) {
  event.preventDefault();
  if (!isFeedbackComplete()) return;
  designLabPhase = "design";
  updateFeedbackProgress();
  updateDesignProgress();
  updateDesignLabStage();
  saveDesignLabData("design-lab", "design");
  if (typeof elements.designDecisionSection.scrollIntoView === "function") {
    elements.designDecisionSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function buildDesignPrompt() {
  const data = getDesignLabData();
  const answers = getPlanAnswers();
  const promptData = getPromptFormData();
  const lines = [
    "세로형 스마트폰 AI 헬스케어 앱의 첫 화면 이미지 1장을 제작해 줘.",
    "",
    "[학생이 정한 앱 이름]",
    getAppName(),
    "- 앱 화면 상단에 위 앱 이름을 정확하게 표시해 줘.",
    "- 학생이 정한 이름을 임의로 바꾸거나 새로운 이름을 제안하지 마.",
    "",
    "[확정 미션]",
    makeSentence(currentMission),
    "",
    "[학생 기획서의 핵심 내용]"
  ];

  PLAN_QUESTIONS.forEach((question, index) => {
    const originalAnswer = answers[index];
    lines.push(`${index + 1}. ${question}`);
    lines.push(`답변: ${originalAnswer.trim() ? originalAnswer : "작성하지 않음"}`);
  });

  lines.push(
    "",
    "[학생이 직접 작성한 AI 요청]",
    `- 목표: ${promptData.goal}`,
    `- 요청: ${promptData.request}`,
    `- 조건: ${promptData.conditions}`,
    "",
    "[AI 피드백에서 발견한 부족한 점]",
    data.feedbackShortcoming,
    "",
    "[학생이 선택한 개선 방향]",
    data.feedbackImprovement,
    "",
    "[디자인 조건]",
    `- 대표 색상: ${getDesignColor()}`,
    `- 디자인 분위기: ${data.mood}`,
    "",
    "[이미지 제작 요청]",
    "- 실제 모바일 앱처럼 깔끔하고 읽기 쉬운 UI로 구성해 줘.",
    "- 위 기획서에 학생이 작성한 핵심 기능과 내용을 활용해 첫 화면을 구성해 줘.",
    "실제 모바일 서비스처럼 세련된 세로형 스마트폰 앱 첫 화면 이미지 한 장을 만들어 줘. 글자는 최소화하고 의료 진단을 보장하는 표현은 사용하지 마."
  );

  return lines.join("\n");
}

function renderDesignPrompt() {
  elements.designPromptText.textContent = buildDesignPrompt();
}

function generateDesignPrompt(event) {
  event.preventDefault();
  if (!isFeedbackComplete() || !isDesignComplete()) return;
  designLabPhase = "result";
  renderDesignPrompt();
  updateDesignLabStage();
  saveDesignLabData("design-lab", "result");
  if (typeof elements.designPromptResult.scrollIntoView === "function") {
    elements.designPromptResult.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function copyDesignPrompt() {
  return copyActivityText(
    elements.designPromptText.textContent,
    elements.designCopyStatus,
    elements.copyDesignPromptButton,
    elements.designPromptText,
    "이미지 제작 프롬프트를 복사했어요. ChatGPT에서 직접 이미지를 만들어 보세요."
  );
}

function restoreDesignLabData() {
  try {
    const confirmed = findValidMission(JSON.parse(localStorage.getItem(CONFIRMED_STORAGE_KEY) || "null"));
    if (!confirmed) return;

    const saved = localStorage.getItem(DESIGN_STORAGE_KEY);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    const fields = parsed.fields;
    if (!isSameMission(parsed.mission, confirmed) || !fields || typeof fields !== "object") {
      localStorage.removeItem(DESIGN_STORAGE_KEY);
      return;
    }

    elements.feedbackShortcoming.value = typeof fields.feedbackShortcoming === "string" ? fields.feedbackShortcoming : "";
    elements.feedbackImprovement.value = typeof fields.feedbackImprovement === "string" ? fields.feedbackImprovement : "";
    elements.designColorInputs.forEach((input) => {
      input.checked = input.value === fields.colorChoice;
    });
    elements.customDesignColor.value = typeof fields.customColor === "string" ? fields.customColor : "";
    elements.designMoodInputs.forEach((input) => {
      input.checked = input.value === fields.mood;
    });
    elements.designChecks.forEach((checkbox, index) => {
      checkbox.checked = Boolean(Array.isArray(fields.checks) && fields.checks[index]);
    });
    elements.fallbackLayoutText.value = typeof fields.fallbackLayout === "string" ? fields.fallbackLayout : "";

    const savedPhase = ["feedback", "design", "result"].includes(parsed.phase) ? parsed.phase : "feedback";
    designLabPhase = savedPhase === "feedback" || isFeedbackComplete() ? savedPhase : "feedback";
    if ((designLabPhase === "design" || designLabPhase === "result") && !isFeedbackComplete()) {
      designLabPhase = "feedback";
    }
    if (designLabPhase === "result" && !isDesignComplete()) designLabPhase = "design";

    updateFeedbackProgress();
    updateDesignProgress();
    updateDesignLabStage();

    if (parsed.view === "design-lab" && getCompletedPromptStepCount() === 5 && getAppName()) {
      designLabView = "design-lab";
      renderFeedbackSourcePrompt();
      if (designLabPhase === "result") renderDesignPrompt();
      showScreen("design-lab", false);
    }
  } catch (error) {
    localStorage.removeItem(DESIGN_STORAGE_KEY);
    console.warn("저장된 피드백과 디자인 활동을 불러오지 못했습니다.", error);
  }
}

function summarizeStudentText(value, maxLength = 92) {
  const normalized = typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
  if (!normalized) return "작성한 내용이 없습니다.";
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength).trim()}…`;
}

function makeSpeechSentence(value, maxLength = 92) {
  const summary = summarizeStudentText(value, maxLength);
  if (summary === "작성한 내용이 없습니다." || /[.!?。]$/.test(summary)) return summary;
  return `${summary}.`;
}

function getSpeechExplanation() {
  const answers = getPlanAnswers();
  const prompt = getPromptFormData();
  const design = getDesignLabData();
  const reasonParts = [answers[0], answers[1]]
    .filter((value) => value.trim())
    .map((value) => makeSpeechSentence(value, 70));
  const featureSources = [
    answers[3] || prompt.goal,
    design.feedbackImprovement || answers[2],
    answers[4] || prompt.request
  ];
  const effectParts = [prompt.goal, answers[2]]
    .filter((value) => value.trim())
    .map((value) => makeSpeechSentence(value, 78));

  return {
    appName: getAppName(),
    reason: reasonParts.join(" ") || makeSpeechSentence(prompt.goal),
    target: `${currentMission.target}을(를) 위한 ${currentMission.topic} 관리 앱입니다.`,
    features: featureSources.map((value) => makeSpeechSentence(value, 82)),
    effect: effectParts.slice(0, 2).join(" ") || makeSpeechSentence(design.feedbackImprovement),
    safety: `발표할 때 “${summarizeStudentText(prompt.conditions, 76)}” 조건을 지키며, 실제 의료 진단을 대신하지 않는 앱이라고 설명하세요.`
  };
}

function buildSummaryImagePrompt() {
  const explanation = getSpeechExplanation();
  const design = getDesignLabData();
  return [
    "고등학생 발표에 사용할 앱 설명 요약 이미지 1장을 만들어 줘.",
    "이미지 비율은 가로형 16:9이고, 30초~1분 발표에서 핵심 내용이 한눈에 들어오게 구성해 줘.",
    "",
    "[학생이 작성한 내용을 바탕으로 자동 정리한 정보]",
    `- 앱 이름: ${explanation.appName}`,
    `- 개발 이유: ${explanation.reason}`,
    `- 사용 대상: ${explanation.target}`,
    "- 핵심 기능 3가지:",
    ...explanation.features.map((feature, index) => `  ${index + 1}. ${feature}`),
    `- 기대 효과: ${explanation.effect}`,
    "",
    "[이미지 구성]",
    "- 앱 이름을 가장 잘 보이는 큰 제목으로 표시해 줘.",
    "- 개발 이유, 사용 대상, 핵심 기능 3가지, 기대 효과를 카드형 또는 구역을 나눈 구성으로 보여 줘.",
    "- 세로형 앱 화면 이미지가 들어갈 수 있는 '앱 화면 미리보기' 공간을 포함해 줘.",
    "- 글이 너무 많지 않도록 쉬운 짧은 문장과 핵심어 위주로 정리해 줘.",
    `- 대표 색상은 ${getDesignColor()}, 분위기는 ${design.mood}으로 하고, 배경은 깔끔하게 구성해 줘.`,
    "- 프로젝트 색상인 크림 배경(#FFF8E1), 진한 글자(#2D2A26), 네이비 포인트(#183153)와 자연스럽게 어울리게 해 줘.",
    "",
    "[중요한 제한]",
    "- 위 학생 작성 내용만 요약해서 사용하고, 새로운 기능이나 효과를 임의로 추가하지 마.",
    "- 어려운 의료 전문 용어를 줄이고 고등학생이 이해하기 쉬운 문장으로 작성해 줘.",
    "- 실제 의료 진단을 대신하거나 진단을 보장하는 앱처럼 표현하지 마.",
    "- 결과는 설명문이 아니라 바로 발표에 사용할 수 있는 완성된 한 장짜리 요약 이미지로 만들어 줘."
  ].join("\n");
}

function renderSummaryImagePrompt() {
  elements.summaryImagePromptText.textContent = buildSummaryImagePrompt();
}

function updateFinalCompletionStatus() {
  const appReady = Boolean(getAppName()) && designLabPhase === "result";
  elements.appPromptReadyBadge.textContent = appReady ? "✓ 준비 완료" : "준비 중";
  elements.appPromptReadyBadge.classList.toggle("is-ready", appReady);
  elements.summaryPromptReadyBadge.textContent = appReady ? "✓ 준비 완료" : "준비 중";
  elements.summaryPromptReadyBadge.classList.toggle("is-ready", appReady);
}

function saveFinalOutputState(nextView = finalOutputView) {
  if (!currentMission) return;
  finalOutputView = nextView;
  try {
    let previousData = {};
    try {
      previousData = JSON.parse(localStorage.getItem(PRESENTATION_STORAGE_KEY) || "{}") || {};
    } catch (error) {
      previousData = {};
    }
    localStorage.setItem(PRESENTATION_STORAGE_KEY, JSON.stringify({
      ...previousData,
      version: 2,
      mission: currentMission,
      view: finalOutputView
    }));
  } catch (error) {
    console.warn("최종 결과물 화면 상태를 저장하지 못했습니다.", error);
  }
}

function renderFinalAppPrompt() {
  elements.finalAppPromptText.textContent = buildDesignPrompt();
}

function openPresentationBuilder() {
  if (!currentMission || !getAppName() || designLabPhase !== "result") return;
  syncAppNameDisplays();
  renderFinalAppPrompt();
  renderSummaryImagePrompt();
  updateFinalCompletionStatus();
  saveFinalOutputState("presentation");
  showScreen("presentation");
}

function returnToDesignLab() {
  saveFinalOutputState("design-lab");
  updateDesignLabStage();
  if (designLabPhase === "result") renderDesignPrompt();
  showScreen("design-lab");
}

function editAppName() {
  saveFinalOutputState("design-lab");
  savePlanData("planner");
  updatePlannerProgress();
  showScreen("planner");
  elements.appNameInput.focus();
}

function copyFinalAppPrompt() {
  return copyActivityText(
    elements.finalAppPromptText.textContent,
    elements.finalAppCopyStatus,
    elements.copyFinalAppPromptButton,
    elements.finalAppPromptText,
    "앱 이미지 프롬프트를 복사했어요. ChatGPT에 붙여넣어 세로형 앱 화면을 만들어 보세요."
  );
}

function copySummaryImagePrompt() {
  return copyActivityText(
    elements.summaryImagePromptText.textContent,
    elements.summaryImageCopyStatus,
    elements.copySummaryImagePromptButton,
    elements.summaryImagePromptText,
    "요약 이미지 프롬프트를 복사했어요. ChatGPT에 붙여넣어 가로형 발표 이미지를 만들어 보세요."
  );
}

function restoreFinalOutputState() {
  try {
    const confirmed = findValidMission(JSON.parse(localStorage.getItem(CONFIRMED_STORAGE_KEY) || "null"));
    if (!confirmed) return;
    const saved = localStorage.getItem(PRESENTATION_STORAGE_KEY);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (!isSameMission(parsed.mission, confirmed)) return;
    finalOutputView = parsed.view === "presentation" ? "presentation" : "design-lab";

    syncAppNameDisplays();
    renderFinalAppPrompt();
    renderSummaryImagePrompt();
    updateFinalCompletionStatus();
    if (finalOutputView === "presentation" && designLabPhase === "result" && getAppName()) {
      showScreen("presentation", false);
    }
  } catch (error) {
    console.warn("저장된 최종 결과물 화면 상태를 불러오지 못했습니다.", error);
  }
}

elements.drawButton.addEventListener("click", drawMission);
elements.confirmButton.addEventListener("click", confirmMission);
elements.restartButton.addEventListener("click", restart);
elements.plannerStartButton.addEventListener("click", openPlanner);
elements.plannerBackButton.addEventListener("click", returnToConfirmedMission);
elements.plannerForm.addEventListener("submit", completePlan);
elements.editPlanButton.addEventListener("click", editPlan);
elements.copyPlanButton.addEventListener("click", copyPlan);
elements.promptStartButton.addEventListener("click", openPromptBuilder);
elements.promptBackButton.addEventListener("click", returnToPlanResult);
elements.promptForm.addEventListener("submit", completePrompt);
elements.editPromptButton.addEventListener("click", editPrompt);
elements.copyPromptButton.addEventListener("click", copyPrompt);
elements.feedbackStartButton.addEventListener("click", openDesignLab);
elements.designLabBackButton.addEventListener("click", returnToPromptResult);
elements.copyFeedbackPromptButton.addEventListener("click", copyFeedbackPrompt);
elements.feedbackForm.addEventListener("submit", continueToDesign);
elements.designForm.addEventListener("submit", generateDesignPrompt);
elements.copyDesignPromptButton.addEventListener("click", copyDesignPrompt);
elements.presentationStartButton.addEventListener("click", openPresentationBuilder);
elements.presentationBackButton.addEventListener("click", returnToDesignLab);
elements.copyFinalAppPromptButton.addEventListener("click", copyFinalAppPrompt);
elements.copySummaryImagePromptButton.addEventListener("click", copySummaryImagePrompt);
elements.editAppNameButton.addEventListener("click", editAppName);

elements.answerFields.forEach((field) => {
  field.addEventListener("input", () => {
    updatePlannerProgress();
    savePlanData("planner");
  });
});

elements.appNameInput.addEventListener("input", () => {
  updatePlannerProgress();
  updateFinalCompletionStatus();
  savePlanData("planner");
  saveFinalOutputState(finalOutputView);
});

elements.hintButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const willOpen = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(willOpen));
    button.textContent = willOpen ? "힌트 닫기" : "힌트 보기";
    elements.hintBoxes[index].hidden = !willOpen;
  });
});

[elements.promptGoal, elements.promptRequest, elements.promptConditions].forEach((field) => {
  field.addEventListener("input", () => {
    updatePromptProgress();
    savePromptData("prompt");
  });
});

[...elements.promptRoleInputs, ...elements.promptFormatInputs].forEach((input) => {
  input.addEventListener("change", () => {
    updatePromptProgress();
    savePromptData("prompt");
  });
});

elements.promptExampleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const willOpen = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(willOpen));
    button.textContent = willOpen ? "예시 숨기기" : "예시 보기";
    elements.promptExamplePanels[index].hidden = !willOpen;
  });
});

[elements.feedbackShortcoming, elements.feedbackImprovement].forEach((field) => {
  field.addEventListener("input", () => {
    if (!isFeedbackComplete()) {
      designLabPhase = "feedback";
    } else if (designLabPhase === "result") {
      designLabPhase = "design";
    }
    updateFeedbackProgress();
    updateDesignLabStage();
    saveDesignLabData("design-lab", designLabPhase);
  });
});

function handleDesignFieldChange() {
  if (designLabPhase === "result") designLabPhase = "design";
  updateDesignProgress();
  updateDesignLabStage();
  saveDesignLabData("design-lab", designLabPhase);
}

elements.designColorInputs.forEach((input) => {
  input.addEventListener("change", () => {
    elements.customDesignColor.value = "";
    handleDesignFieldChange();
  });
});

elements.customDesignColor.addEventListener("input", () => {
  if (elements.customDesignColor.value.trim()) {
    elements.designColorInputs.forEach((input) => { input.checked = false; });
  }
  handleDesignFieldChange();
});

elements.designMoodInputs.forEach((input) => {
  input.addEventListener("change", handleDesignFieldChange);
});

elements.designChecks.forEach((checkbox) => {
  checkbox.addEventListener("change", () => saveDesignLabData("design-lab", designLabPhase));
});

elements.fallbackLayoutText.addEventListener("input", () => saveDesignLabData("design-lab", designLabPhase));

restoreState();
restorePlanData();
restorePromptData();
restoreDesignLabData();
restoreFinalOutputState();
