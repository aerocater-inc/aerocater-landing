document.getElementById('yr').textContent = new Date().getFullYear();

// Split-flap dispatch board — codes and timestamps stay in fixed dispatch notation
// regardless of UI language, so this data is not routed through i18n.js.
const rows = [
  { code:'AC 4471', detail:'GATE A7 · TRK TK-03 · J. TREMBLAY', status:'ASSIGNED', cls:'st-assigned' },
  { code:'WS 412',  detail:'GATE D2 · DRV M. CÔTÉ', status:'DISPATCHED', cls:'st-assigned' },
  { code:'TRL-0031',detail:'LOADED AIRCRAFT · 08:42', status:'SCANNED', cls:'st-assigned' },
  { code:'TK-05',   detail:'HYDRAULIC · 3,100 CYCLES', status:'CRITICAL', cls:'st-critical' },
  { code:'UA 891',  detail:'GATE C4 · AUTO-DISPATCH', status:'3s', cls:'st-warn' },
  { code:'AC 204',  detail:'GATE B12 · DRV A. HASSAN', status:'ASSIGNED', cls:'st-assigned' },
  { code:'TRL-0042',detail:'KITCHEN DEPARTURE · 07:19', status:'SCANNED', cls:'st-assigned' },
  { code:'TK-02',   detail:'SERVICE WINDOW · 71%', status:'AT RISK', cls:'st-warn' },
];

const board = document.getElementById('flapboard');
const VISIBLE = 5;
let offset = 0;

function renderBoard(){
  board.innerHTML = '';
  for(let i=0;i<VISIBLE;i++){
    const r = rows[(offset+i) % rows.length];
    const div = document.createElement('div');
    div.className = 'flap-row flap-fade';
    div.innerHTML = `<span class="flap-code">${r.code}</span><span class="flap-detail">${r.detail}</span><span class="flap-status ${r.cls}">${r.status}</span>`;
    board.appendChild(div);
  }
}
renderBoard();
setInterval(()=>{ offset = (offset+1) % rows.length; renderBoard(); }, 2600);
