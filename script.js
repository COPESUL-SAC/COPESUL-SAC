document.addEventListener('DOMContentLoaded', () => {
    // --- Selectores de Elementos ---
    const authPage = document.getElementById('authPage');
    const authForm = document.getElementById('authForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const authMessage = document.getElementById('authMessage');
    const loginSection = document.getElementById('login-section');
    const recoverSection = document.getElementById('recover-section');
    const recoverUsernameInput = document.getElementById('recover-username');
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const otpSection = document.getElementById('otp-section');
    const otpInput = document.getElementById('otp');
    const newPasswordInput = document.getElementById('new-password');
    const validateOtpBtn = document.getElementById('validateOtpBtn');
    const mainDashboardPage = document.getElementById('mainDashboardPage');
    const goToMaintenanceOption = document.getElementById('goToMaintenanceOption');
    const goToChecklistOption = document.getElementById('goToChecklistOption');
    const logoutBtnMain = document.getElementById('logoutBtnMain');
    const maintenanceNotificationBadge = document.getElementById('maintenanceNotificationBadge');
    const solicitarSoporteBtn = document.getElementById('solicitarSoporteBtn');
    const appPage = document.getElementById('appPage');
    const logoutBtn = document.getElementById('logoutBtn');
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    const viewChecklistSummaryPdfBtn = document.getElementById('viewChecklistSummaryPdfBtn');
    const downloadChecklistSummaryPdfBtn = document.getElementById('downloadChecklistSummaryPdfBtn');
    const searchBar = document.getElementById('searchEmployee');
    const employeeListUl = document.getElementById('employeeListUl');
    const currentEmployeeDisplay = document.getElementById('currentEmployeeDisplay');
    const checklistBody = document.getElementById('checklistBody');
    const conditionActivo = document.getElementById('conditionActivo');
    const conditionNoActivo = document.getElementById('conditionNoActivo');
    const noAplicaAreas = document.getElementById('noAplicaAreas');
    const saveChecklistBtn = document.getElementById('saveChecklistBtn');
    const newChecklistBtn = document.getElementById('newChecklistBtn');
    const employeeHistoryUl = document.getElementById('employeeHistoryUl');
    const backToMainFromAppBtn = document.getElementById('backToMainFromAppBtn');
    const addEmployeeModal = document.getElementById('addEmployeeModal');
    const modalTitle = document.getElementById('modalTitle');
    const newEmployeeForm = document.getElementById('newEmployeeForm');
    const newEmployeeFullName = document.getElementById('newEmployeeFullName');
    const newEmployeeDNI = document.getElementById('newEmployeeDNI');
    const newEmployeeArea = document.getElementById('newEmployeeArea');
    const newEmployeeCompany = document.getElementById('newEmployeeCompany');
    const newEmployeeMessage = document.getElementById('newEmployeeMessage');
    const saveNewEmployeeBtn = document.getElementById('saveNewEmployeeBtn');
    const cancelNewEmployeeBtn = document.getElementById('cancelNewEmployeeBtn');
    const maintenancePage = document.getElementById('maintenancePage');
    const newReportBtn = document.getElementById('newReportBtn');
    const viewPendingBtn = document.getElementById('viewPendingBtn');
    const logoutBtnMaintenance = document.getElementById('logoutBtnMaintenance');
    const openSearchModalBtn = document.getElementById('openSearchModalBtn');
    const equipmentStatusBtn = document.getElementById('equipmentStatusBtn');
    const helpBtn = document.getElementById('helpBtn');
    const maintenanceForm = document.getElementById('maintenanceForm');
    const reportIdInput = document.getElementById('reportId');
    const statusSelect = document.getElementById('status');
    const incidenceDateInput = document.getElementById('incidenceDate');
    const attentionDateInput = document.getElementById('attentionDate');
    const deliveryDateInput = document.getElementById('deliveryDate');
    const horaInicioInput = document.getElementById('horaInicio');
    const horaFinalizadaInput = document.getElementById('horaFinalizada');
    const equipmentNameInput = document.getElementById('equipmentName');
    const maintenanceTypeSelect = document.getElementById('maintenanceType');
    const reportedIncidenceInput = document.getElementById('reportedIncidence');
    const reviewedComponentInput = document.getElementById('reviewedComponent');
    const observationsInput = document.getElementById('observations');
    const workDoneInput = document.getElementById('workDone');
    const sparePartsUsedInput = document.getElementById('sparePartsUsed');
    const responsibleTechnicianSelect = document.getElementById('responsibleTechnician');
    const operatorInShiftInput = document.getElementById('operatorInShift');
    const saveReportBtn = document.getElementById('saveReportBtn');
    const maintenanceMessage = document.getElementById('maintenanceMessage');
    const photoUploadContainer = document.querySelector('.photo-upload-container');
    const photoInput1 = document.getElementById('photo1');
    const photoInput2 = document.getElementById('photo2');
    const photoInput3 = document.getElementById('photo3');
    const thumb1 = document.getElementById('thumb1');
    const thumb2 = document.getElementById('thumb2');
    const thumb3 = document.getElementById('thumb3');
    const photoTitle1 = document.getElementById('photoTitle1');
    const photoTitle2 = document.getElementById('photoTitle2');
    const photoTitle3 = document.getElementById('photoTitle3');
    const photoPreviewModal = document.getElementById('photoPreviewModal');
    const photoPreviewImage = document.getElementById('photoPreviewImage');
    const closePhotoPreviewBtn = document.getElementById('closePhotoPreviewBtn');
    const maintenanceReportListBody = document.getElementById('maintenanceReportListBody');
    const backToMainFromMaintenanceBtn = document.getElementById('backToMainFromMaintenanceBtn');
    const chartCanvas = document.getElementById('chartCanvas');
    const signatureCanvas = document.getElementById('signature-canvas');
    const clearSignatureBtn = document.getElementById('clearSignatureBtn');
    const searchModal = document.getElementById('searchModal');
    const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
    const applySearchBtn = document.getElementById('applySearchBtn');
    const resetSearchBtn = document.getElementById('resetSearchBtn');
    const generateReportFromSearchBtn = document.getElementById('generateReportFromSearchBtn');
    const searchStartDate = document.getElementById('searchStartDate');
    const searchEndDate = document.getElementById('searchEndDate');
    const searchStatus = document.getElementById('searchStatus');
    const searchEquipmentNameInput = document.getElementById('searchEquipmentName');
    const searchMaintenanceType = document.getElementById('searchMaintenanceType');
    const pendingReportsModal = document.getElementById('pendingReportsModal');
    const closePendingReportsModalBtn = document.getElementById('closePendingReportsModalBtn');
    const pendingReportsListContainer = document.getElementById('pendingReportsListContainer');
    const pendingReportsBtnBadge = document.getElementById('pendingReportsBtnBadge');
    const alertsBtn = document.getElementById('alertsBtn');
    const alertModal = document.getElementById('alertModal');
    const closeAlertModalBtn = document.getElementById('closeAlertModalBtn');
    const cancelAlertBtn = document.getElementById('cancelAlertBtn');
    const alertForm = document.getElementById('alertForm');
    const alertFechaHora = document.getElementById('alertFechaHora');
    const alertPrioridad = document.getElementById('alertPrioridad');
    const alertEquipo = document.getElementById('alertEquipo');
    const alertInconveniente = document.getElementById('alertInconveniente');
    const alertPhoto = document.getElementById('alertPhoto');
    const alertThumb = document.getElementById('alertThumb');
    const deleteAlertPhotoBtn = document.getElementById('deleteAlertPhotoBtn');
    const alertsListModal = document.getElementById('alertsListModal');
    const closeAlertsListModalBtn = document.getElementById('closeAlertsListModalBtn');
    const alertsListContainer = document.getElementById('alertsListContainer');
    const alertsNotificationBadge = document.getElementById('alertsNotificationBadge');
    const whatsappOverlay = document.getElementById('whatsappOverlay');
    const whatsappConfirmModal = document.getElementById('whatsappConfirmModal');
    const whatsappResumen = document.getElementById('whatsappResumen');
    const enviarWhatsAppBtn = document.getElementById('enviarWhatsAppBtn');
    const equipmentStatusModal = document.getElementById('equipmentStatusModal');
    const closeEquipmentStatusModalBtn = document.getElementById('closeEquipmentStatusModalBtn');
    const helpDashboardModal = document.getElementById('helpDashboardModal');
    const closeHelpDashboardModalBtn = document.getElementById('closeHelpDashboardModalBtn');
    const helpDashboardContent = document.getElementById('helpDashboardContent');
    const dashboardBtn = document.getElementById('dashboardBtn');

    // Selectores para Compras Modal
    const comprasBtn = document.getElementById('comprasBtn');
    const purchaseRequestModal = document.getElementById('purchaseRequestModal');
    const closePurchaseRequestModalBtn = document.getElementById('closePurchaseRequestModalBtn');
    const exportPurchasePdfBtn = document.getElementById('exportPurchasePdfBtn');
    const sendPurchaseToControlBtn = document.getElementById('sendPurchaseToControlBtn');


    // Selectores para Control de Compra Modal
    const controlCompraBtn = document.getElementById('controlCompraBtn');
    const controlCompraModal = document.getElementById('controlCompraModal');
    const closeControlCompraModalBtn = document.getElementById('closeControlCompraModalBtn');

    // --- Variables de Estado y Datos ---
    let currentChart = null;
    let signaturePad;
    let purchaseSignaturePads = {};
    let codigoGenerado = null;
    let usuarioParaRecuperar = null;
    let loggedInUser = null;
    let allEmployees = {};
    let currentEmployeeId = null;
    let editingEmployeeId = null;
    let allMaintenanceReports = {};
    let allTechnicalAlerts = {};
    let currentReportId = null;
    let currentMaintenanceFilters = {};
    let equipmentStatusData = null;
    let isControlCompraInitialized = false;
    let currentPurchaseRequestId = null;

    let users = JSON.parse(localStorage.getItem("users")) || [{
        'usuario': 'Rafael Rojas',
        'contraseña': 'ci5yb2phczIwMjU=',
        'nivel': 'mantenimiento',
        'telefono': '+51906271491',
        'genero': 'masculino'
    }, {
        'usuario': 'Francisco Vera',
        'contraseña': 'Zi52ZXJhMjAyNQ==',
        'nivel': 'mantenimiento',
        'telefono': '+51922813662',
        'genero': 'masculino'
    }, {
        'usuario': 'Nilton de la Cruz',
        'contraseña': 'bi5kZWxhY3J1eg==',
        'nivel': 'mantenimiento',
        'telefono': '',
        'genero': 'masculino'
    }, {
        'usuario': 'Fernandos Vasquez',
        'contraseña': 'Zi52YXNxdWV6MjAyNQ==',
        'nivel': 'mantenimiento',
        'telefono': '+51936682999',
        'genero': 'masculino'
    }, {
        'usuario': 'Leonardo Rodriguez',
        'contraseña': 'ci5yb2RyaWd1ZXoyMDI1',
        'nivel': 'mantenimiento',
        'telefono': '',
        'genero': 'masculino'
    }, {
        'usuario': 'Yasbel Vera',
        'contraseña': 'eS52ZXJhMjAyNQ==',
        'nivel': 'mantenimiento',
        'telefono': '',
        'genero': 'femenino'
    }, {
        'usuario': 'Yasbel Vera',
        'contraseña': 'Q29wZXN1bDIwMjU=',
        'nivel': 'checklist',
        'telefono': '',
        'genero': 'femenino'
    }, {
        'usuario': 'Erick Garcia',
        'contraseña': 'ZXJpY2sxMA==',
        'nivel': 'administrador',
        'telefono': '',
        'genero': 'masculino'
    }, {
        'usuario': 'Elisabeth Alcantara',
        'contraseña': 'Q29wZXN1bDIwMjU=',
        'nivel': 'checklist',
        'telefono': '',
        'genero': 'femenino'
    }];
    localStorage.setItem('users', JSON.stringify(users));

    const usuariasFemeninas = ["Yasbel Vera", "Elisabeth Alcantara"];

    function reproducirVoz(texto) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'es-ES';
            utterance.rate = 1;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
        } else {
            console.warn("Lo sentimos, tu navegador no soporta la síntesis de voz.");
        }
    }

    // --- Lógica de Autenticación y Navegación ---
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userValue = usernameInput.value.trim();
        const passValue = passwordInput.value.trim();
        const usuarioEncontrado = users.find(u =>
            u.usuario.toLowerCase() === userValue.toLowerCase() &&
            atob(u.contraseña) === passValue
        );

        if (usuarioEncontrado) {
            loggedInUser = usuarioEncontrado.usuario;
            localStorage.setItem('loggedInUser', usuarioEncontrado.usuario);
            localStorage.setItem('loggedInUserRole', usuarioEncontrado.nivel);
            authPage.style.display = 'none';
            mainDashboardPage.style.display = 'flex';
            showWelcomeMessage(usuarioEncontrado);
            const saludoHablado = usuariasFemeninas.includes(usuarioEncontrado.usuario) ? 'Bienvenida' : 'Bienvenido';
            const textoCompletoSaludo = `${saludoHablado} ${usuarioEncontrado.usuario}, A Corporación Peruana de Suministros Logísticos.`;
            reproducirVoz(textoCompletoSaludo);
            authMessage.textContent = '';
            loadAllData();
            updateDashboardAccess();
            const titulo = document.getElementById('titulo-animado');
            const textoCompleto = "MENÚ DE CORPORACION PERUANA DE SUMINISTROS LOGISTICOS SAC";
            startTypingAnimation(titulo, textoCompleto, 70);
        } else {
            authMessage.textContent = 'Usuario o contraseña incorrectos.';
            authMessage.classList.add('error');
        }
    });

    window.switchAuthView = (id) => {
        loginSection.classList.add("hidden");
        recoverSection.classList.add("hidden");
        document.getElementById(id).classList.remove("hidden");
        authMessage.textContent = '';
    }

    sendOtpBtn.addEventListener('click', () => {
        const user = recoverUsernameInput.value.trim();
        const usuario = users.find(u => u.usuario.toLowerCase() === user.toLowerCase());
        const validPhone = usuario && usuario.telefono && /^\+?51\d{9}$/.test(usuario.telefono);
        if (validPhone) {
            usuarioParaRecuperar = usuario;
            codigoGenerado = Math.floor(100000 + Math.random() * 900000);
            sessionStorage.setItem("otpIntentos", "0");
            setTimeout(() => {
                codigoGenerado = null;
            }, 5 * 60 * 1000);
            const mensaje = encodeURIComponent(`Hola ${user}, tu código de recuperación para COPESUL SAC es: ${codigoGenerado}`);
            const telefonoURL = usuario.telefono.replace(/[^0-9]/g, '');
            window.open(`https://wa.me/${telefonoURL}?text=${mensaje}`, '_blank');
            otpSection.classList.remove("hidden");
            displayMessage('Código enviado. Revisa tu WhatsApp.', 'success');
        } else {
            displayMessage("Usuario no encontrado o sin número de teléfono válido.", 'error');
        }
    });

    validateOtpBtn.addEventListener('click', () => {
        const otpIngresado = otpInput.value.trim();
        const nuevaPass = newPasswordInput.value;
        let intentos = parseInt(sessionStorage.getItem("otpIntentos")) || 0;
        if (intentos >= 3) {
            displayMessage("Demasiados intentos. Intenta de nuevo más tarde.", 'error');
            return;
        }
        if (codigoGenerado && otpIngresado === String(codigoGenerado)) {
            const userIndex = users.findIndex(u => u.usuario === usuarioParaRecuperar.usuario);
            if (userIndex !== -1) {
                users[userIndex].contraseña = btoa(nuevaPass);
                localStorage.setItem("users", JSON.stringify(users));
                displayMessage("Contraseña cambiada exitosamente.", 'success');
                switchAuthView('login-section');
                recoverUsernameInput.value = '';
                otpInput.value = '';
                newPasswordInput.value = '';
                otpSection.classList.add('hidden');
            }
        } else {
            intentos++;
            sessionStorage.setItem("otpIntentos", String(intentos));
            displayMessage(`Código incorrecto. Intento ${intentos} de 3.`, 'error');
        }
    });

    window.togglePasswordVisibility = (id) => {
        const input = document.getElementById(id);
        if (input) {
            input.type = input.type === "password" ? "text" : "password";
        }
    }

    function updateDashboardAccess() {
        const userRole = localStorage.getItem('loggedInUserRole');
        solicitarSoporteBtn.style.display = 'none';
        goToMaintenanceOption.style.display = 'none';
        goToChecklistOption.style.display = 'none';
        if (userRole === 'administrador') {
            solicitarSoporteBtn.style.display = 'flex';
            goToMaintenanceOption.style.display = 'flex';
            goToChecklistOption.style.display = 'flex';
        } else if (userRole === 'mantenimiento') {
            solicitarSoporteBtn.style.display = 'flex';
            goToMaintenanceOption.style.display = 'flex';
        } else if (userRole === 'checklist') {
            goToChecklistOption.style.display = 'flex';
        }
    }

    goToChecklistOption.addEventListener('click', () => {
        const userRole = localStorage.getItem('loggedInUserRole');
        if (userRole !== 'checklist' && userRole !== 'administrador') {
            displayMessage('No tienes permisos para acceder a este módulo.', 'error');
            return;
        }
        mainDashboardPage.style.display = 'none';
        appPage.style.display = 'flex';
        loadAllEmployees();
    });

    goToMaintenanceOption.addEventListener('click', () => {
        const userRole = localStorage.getItem('loggedInUserRole');
        if (userRole !== 'mantenimiento' && userRole !== 'administrador') {
            displayMessage('No tienes permisos para acceder a este módulo.', 'error');
            return;
        }
        showMaintenancePage();
    });

    solicitarSoporteBtn.addEventListener('click', () => {
        const userRole = localStorage.getItem('loggedInUserRole');
        if (userRole !== 'mantenimiento' && userRole !== 'administrador') {
            displayMessage('No tienes permisos para generar alertas.', 'error');
            return;
        }
        resetAlertForm();
        alertModal.style.display = 'flex';
    });

    // --- Lógica de Carga de Datos ---
    function loadAllData() {
        loadAllEmployees();
        loadAllMaintenanceReports();
        loadTechnicalAlerts();
        updateAllNotifications();
    }

    // --- Definiciones de Datos Constantes ---
    const checklistItems = [{ id: 'dni', name: 'DNI' }, { id: 'antecedentes_policiales', name: 'Antecedentes Policiales' }, { id: 'antecedentes_penales', name: 'Antecedentes Penales' }, { id: 'antecedentes_judiciales', name: 'Antecedentes Judiciales' }, { id: 'curriculum_vitae', name: 'Curriculum Vitae' }, { id: 'declaracion_jurada_domicilio', name: 'Declaración Jurada de Domicilio' }, { id: 'recibo_servicios', name: 'Recibo de Servicios (agua, luz, teléfono)' }, { id: 'contrato_trabajo', name: 'Contrato de Trabajo' }, { id: 'boleta_pago', name: 'Boleta de Pago' }, { id: 'seguro_sctr', name: 'Seguro SCTR' }, { id: 'examenes_medicos', name: 'Exámenes Médicos' }, { id: 'constancia_trabajo_anterior', name: 'Constancia de Trabajo Anterior' }, { id: 'certificado_estudios', name: 'Certificado de Estudios' }, { id: 'licencia_conducir', name: 'Licencia de Conducir (si aplica)' }, { id: 'record_conductor', name: 'Record de Conductor (si aplica)' }, { id: 'declaracion_jurada_salud', name: 'Declaración Jurada de Salud' }, { id: 'formato_cargos', name: 'Formato de Cargos' }, { id: 'ficha_datos_personales', name: 'Ficha de Datos Personales' }, { id: 'certificado_capacitacion', name: 'Certificado de Capacitación' }, { id: 'reglamento_interno', name: 'Reglamento Interno de Trabajo' }];
    const STATUS_OPTIONS = ['FINALIZADO', 'PENDIENTE', 'PROCESO'];
    const EQUIPMENT_OPTIONS = ['EQUIPOS PERIFERICOS', 'SELLADORA LATERAL N1', 'SELLADORA LATERAL N2', 'SELLADORA LATERAL N3', 'SELLADORA LATERAL N4', 'SELLADORA FONDO CORTE CALIENTE N5', 'SELLADORA PARCHE N6', 'SELLADORA LATERAL N7', 'SELLADORA SELLO FONDO CORTE FRIO N8', 'SELLADORA HECE N9', 'DOBLADOR N1', 'DOBLADOR N2', 'ALINEADOR NEUMATICO N1', 'ALINEADOR NEUMATICO N2', 'ALINEADOR NEUMATICO N3', 'ALINEADOR MECANICO N4', 'ALINEADOR MECANICO N5', 'COMPRESOR DE TORNILLO N1', 'COMPRESOR DE TORNILLO N2', 'COMPRESOR PISTON N1', 'COMPRESOR PISTON N2', 'COMPRESOR PISTON N3', 'CORTADORA DE TUCOS N1', 'IMPRESORA 6 COLORES', 'IMPRESORA 4 COLORES', 'MONTADORA DE CLISSES', 'REFILADora N1', 'REFILADORA N2', 'EXTRUSORA N1', 'EXTRUSORA N2', 'EXTRUSORA N3', 'MOLINO', 'MEZCLADOR', 'GAVIMETRICO', 'ESTACION DE TRATADO N1', 'ESTACION DE TRATADO N2', 'ESTACION DE TRATADO N3', 'ESTACION DE TRATADO N4', 'CORTADORA DE TUCOS N2', 'ALINEADOR MECANICO HECE N6', 'ALINEADOR MECANICO N7', 'ALINEADOR MECANICO N8', 'TROQUEL PRENSA EXCENTRICA ASA', 'TROQUEL TUBULAR VERTICAL NACIONAL', 'TROQUEL TUBULAR VERTICAL CHALLENGE', 'SECADOR DE AIRE N1', 'SECADOR DE AIRE N2', 'TRATADORA N1', 'TRATADORA N2', 'TRATADORA N3', 'TRATADora N4', 'TANQUE PULMON H1', 'TANQUE PULMON H2', 'SELLADORA MANUAL', 'CHILLER', 'LAMINADORA', 'GUILLOTINA', 'ESTACION DE TRATADO N5', 'ESTACION DE TRATADO N6', 'ESTACION DE TRATADO N7', 'TRATADORA N5', 'TRATADORA N6', 'TRATADORA N7'];
    const MAINTENANCE_TYPE_OPTIONS = ['PREVENTIVO', 'SOPORTE', 'CORRECTIVO', 'PREVENTIVO PROGRAMADO', 'FABRICACIÓN', 'PREVENTIVO NO PROGRAMADO', 'INSTALACION EQUIPO NUEVO', 'PREDICTIVO', 'PREVENTIVO-CORRECTIVO'];
    const TECHNICIAN_OPTIONS = ['RAFAEL ROJAS', 'FRANCISCO VERA', 'NILTON DE LA CRUZ', 'FERNANDOS VASQUEZ', 'LEONARDO RODRIGUEZ', 'TECNICO EXTERNO'];

    // --- Funciones del Módulo de Checklist ---
    function getUserDataKey(username) {
        const userRole = localStorage.getItem('loggedInUserRole');
        if (userRole === 'administrador') {
            return `employee_data_global`;
        }
        return `employee_data_${username}`;
    }

    function loadAllEmployees() {
        if (!loggedInUser) return;
        const dataKey = getUserDataKey(loggedInUser);
        const storedData = localStorage.getItem(dataKey);
        allEmployees = storedData ? JSON.parse(storedData) : {};
        renderEmployeeList(searchBar.value.trim());
        resetChecklistUI();
    }

    function saveAllEmployees() {
        if (!loggedInUser) return;
        const dataKey = getUserDataKey(loggedInUser);
        localStorage.setItem(dataKey, JSON.stringify(allEmployees));
    }

    function addHistoryEntry(employeeId, action, details = {}) {
        if (!allEmployees[employeeId]) {
            allEmployees[employeeId] = {
                checklist: {},
                history: []
            };
        }
        if (!allEmployees[employeeId].history) {
            allEmployees[employeeId].history = [];
        }
        const user = localStorage.getItem('loggedInUser') || "Desconocido";
        const entry = {
            timestamp: new Date().toISOString(),
            user: user,
            action: action,
            details: details,
        };
        allEmployees[employeeId].history.unshift(entry);
        if (allEmployees[employeeId].history.length > 50) {
            allEmployees[employeeId].history = allEmployees[employeeId].history.slice(0, 50);
        }
        saveAllEmployees();
        if (currentEmployeeId === employeeId) {
            renderHistory(allEmployees[employeeId].history);
        }
    }

    function calculateCompletionPercentage(employee) {
        if (!employee || !employee.checklist) return 0;
        let completedCount = 0;
        checklistItems.forEach(item => {
            const itemData = employee.checklist[item.id];
            if (itemData && itemData.status === true) {
                completedCount++;
            }
        });
        return checklistItems.length > 0 ? Math.round((completedCount / checklistItems.length) * 100) : 0;
    }

    function renderEmployeeList(filter = "") {
        employeeListUl.innerHTML = "";
        const filteredEmployees = Object.values(allEmployees)
            .filter(emp => emp.full_name && emp.dni)
            .filter(emp =>
                emp.full_name.toLowerCase().includes(filter.toLowerCase()) ||
                emp.dni.includes(filter) ||
                (emp.area || "").toLowerCase().includes(filter.toLowerCase()) ||
                (emp.company || "").toLowerCase().includes(filter.toLowerCase())
            );
        if (filteredEmployees.length === 0) {
            employeeListUl.innerHTML = '<li style="text-align:center; color:#888;">No hay colaboradores registrados.</li>';
            return;
        }
        filteredEmployees.forEach(employee => {
            const li = document.createElement('li');
            li.dataset.id = employee.id;
            const percentage = calculateCompletionPercentage(employee);
            let color = "#dc3545";
            if (percentage >= 100) color = "#28a745";
            else if (percentage >= 50) color = "#ffc107";
            const photoHtml = employee.photo ?
                `<img src="${employee.photo}" alt="Foto" class="employee-photo">` :
                '<div class="employee-photo"><i class="fas fa-user" style="font-size: 24px; color: #ccc;"></i></div>';
            li.innerHTML = `
                ${photoHtml}
                <div class="employee-name">
                    <strong>${employee.full_name}</strong>
                    <span>DNI: ${employee.dni} | Área: ${employee.area || "N/A"}</span>
                </div>
                <span class="completion-percentage" style="color: ${color};">${percentage}%</span>
                <div class="employee-actions">
                    <button class="action-btn edit-btn" title="Editar">✏️</button>
                    <button class="action-btn delete-btn" title="Eliminar">🗑️</button>
                    <label for="photo-upload-${employee.id}" class="action-btn" title="Subir foto">📸</label>
                    <input type="file" id="photo-upload-${employee.id}" class="employee-photo-upload" accept="image/*" style="display:none;">
                </div>
            `;
            li.addEventListener('click', (e) => {
                if (!e.target.closest('.employee-actions')) {
                    loadEmployee(employee.id);
                }
            });
            li.querySelector('.edit-btn').addEventListener('click', () => {
                editingEmployeeId = employee.id;
                const empData = allEmployees[editingEmployeeId];
                if (empData) {
                    modalTitle.textContent = "Editar Colaborador";
                    newEmployeeFullName.value = empData.full_name;
                    newEmployeeDNI.value = empData.dni;
                    newEmployeeArea.value = empData.area || "";
                    newEmployeeCompany.value = empData.company || "";
                    newEmployeeMessage.textContent = "";
                    addEmployeeModal.style.display = "flex";
                }
            });
            li.querySelector('.delete-btn').addEventListener('click', () => {
                const empName = (allEmployees[employee.id] ?.full_name || "este colaborador");
                showConfirm(`¿Seguro que quieres eliminar a ${empName}?`, () => {
                    delete allEmployees[employee.id];
                    saveAllEmployees();
                    renderEmployeeList(searchBar.value.trim());
                    if (currentEmployeeId === employee.id) resetChecklistUI();
                    displayMessage(`¡${empName} ha sido eliminado!`, 'success');
                });
            });
            li.querySelector('.employee-photo-upload').addEventListener('change', (e) => {
                handleEmployeePhotoUpload(e, employee.id);
            });
            employeeListUl.appendChild(li);
        });
    }

    function handleEmployeePhotoUpload(event, employeeId) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            allEmployees[employeeId].photo = e.target.result;
            saveAllEmployees();
            addHistoryEntry(employeeId, 'Foto de perfil actualizada.');
            renderEmployeeList(searchBar.value.trim());
            displayMessage('Foto actualizada.', 'success');
        };
        reader.readAsDataURL(file);
    }

    addEmployeeBtn.addEventListener("click", () => {
        editingEmployeeId = null;
        modalTitle.textContent = "Añadir Nuevo Colaborador";
        newEmployeeForm.reset();
        newEmployeeMessage.textContent = "";
        addEmployeeModal.style.display = "flex";
    });

    cancelNewEmployeeBtn.addEventListener("click", () => {
        addEmployeeModal.style.display = "none";
    });

    newEmployeeForm.addEventListener("submit", e => {
        e.preventDefault();
        const fullName = newEmployeeFullName.value.trim();
        const dni = newEmployeeDNI.value.trim();
        const area = newEmployeeArea.value.trim();
        const company = newEmployeeCompany.value.trim();
        if (fullName === "" || dni === "") {
            newEmployeeMessage.textContent = "Nombre y DNI son obligatorios.";
            newEmployeeMessage.style.color = "red";
            return;
        }
        if (editingEmployeeId) {
            allEmployees[editingEmployeeId].full_name = fullName;
            allEmployees[editingEmployeeId].dni = dni;
            allEmployees[editingEmployeeId].area = area;
            allEmployees[editingEmployeeId].company = company;
            addHistoryEntry(editingEmployeeId, "Datos actualizados");
            if (currentEmployeeId === editingEmployeeId) loadEmployee(editingEmployeeId);
        } else {
            const newId = `emp-${Date.now()}`;
            if (Object.values(allEmployees).some(emp => emp.dni === dni)) {
                newEmployeeMessage.textContent = "Ya existe un colaborador con este DNI.";
                newEmployeeMessage.style.color = "red";
                return;
            }
            allEmployees[newId] = {
                id: newId,
                full_name: fullName,
                dni: dni,
                area: area,
                company: company,
                checklist: {},
                history: [],
                photo: ""
            };
            addHistoryEntry(newId, "Colaborador añadido");
        }
        saveAllEmployees();
        renderEmployeeList(searchBar.value.trim());
        newEmployeeMessage.textContent = "¡Guardado con éxito!";
        newEmployeeMessage.style.color = "green";
        setTimeout(() => {
            addEmployeeModal.style.display = "none"
        }, 1500);
    });

    function resetChecklistUI() {
        currentEmployeeId = null;
        currentEmployeeDisplay.textContent = "Selecciona un Colaborador";
        checklistBody.innerHTML = "";
        if (conditionActivo) {
            conditionActivo.checked = false;
            conditionActivo.disabled = true;
        }
        if (conditionNoActivo) {
            conditionNoActivo.checked = false;
            conditionNoActivo.disabled = true;
        }
        if (noAplicaAreas) {
            noAplicaAreas.checked = false;
            noAplicaAreas.disabled = true;
        }
        if (saveChecklistBtn) saveChecklistBtn.disabled = true;
        if (newChecklistBtn) newChecklistBtn.disabled = false;
        employeeHistoryUl.innerHTML = '<li>Selecciona un colaborador.</li>';
    }

    function loadEmployee(employeeId) {
        if (!allEmployees[employeeId]) {
            displayMessage('Error: Colaborador no encontrado.', 'error');
            return;
        }
        currentEmployeeId = employeeId;
        const employeeData = allEmployees[employeeId];
        currentEmployeeDisplay.textContent = `Checklist de: ${employeeData.full_name}`;
        checklistBody.innerHTML = '';
        conditionActivo.checked = employeeData.condition === 'activo';
        conditionNoActivo.checked = employeeData.condition === 'no_activo';
        noAplicaAreas.checked = employeeData.noAplicaAreas || false;
        conditionActivo.disabled = false;
        conditionNoActivo.disabled = false;
        noAplicaAreas.disabled = false;
        saveChecklistBtn.disabled = false;
        newChecklistBtn.disabled = false;
        checklistItems.forEach(item => {
            const itemData = employeeData.checklist[item.id] || {
                status: null,
                file: '',
                notes: ''
            };
            const isChecked = itemData.status === true;
            const isUnchecked = itemData.status === false;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>
                    <div class="checkbox-container ${isChecked ? 'checked' : (isUnchecked ? 'unchecked' : '')}" data-item-id="${item.id}" data-status="${itemData.status === true ? 'true' : (itemData.status === false ? 'false' : '')}">
                        ${isChecked ? '✓' : (isUnchecked ? '✗' : '')}
                    </div>
                </td>
                <td>
                    <label for="file-${item.id}-${currentEmployeeId}" class="custom-file-upload">Subir</label>
                    <input type="file" id="file-${item.id}-${currentEmployeeId}" data-item-id="${item.id}" style="display: none;">
                    <span class="file-name">${itemData.file ? itemData.file.split('\\').pop().split('/').pop() : 'No hay archivo'}</span>
                </td>
                <td><textarea class="notes-input" data-item-id="${item.id}" placeholder="Notas...">${itemData.notes || ''}</textarea></td>
            `;
            checklistBody.appendChild(row);
        });
        renderHistory(employeeData.history);
    }

    function renderHistory(history = []) {
        employeeHistoryUl.innerHTML = '';
        if (history.length === 0) {
            employeeHistoryUl.innerHTML = '<li>No hay historial.</li>';
            return;
        }
        history.forEach(entry => {
            const li = document.createElement('li');
            const date = new Date(entry.timestamp);
            const formattedDate = date.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            li.innerHTML = `<strong>${entry.action}</strong> - <span>${entry.user} (${formattedDate})</span>`;
            employeeHistoryUl.appendChild(li);
        });
    }

    function updateLivePercentage(employeeId) {
        if (!employeeId) return;
        const employeeLi = employeeListUl.querySelector(`li[data-id="${employeeId}"]`);
        if (!employeeLi) return;
        const percentageSpan = employeeLi.querySelector('.completion-percentage');
        if (!percentageSpan) return;
        const checkBoxes = checklistBody.querySelectorAll('.checkbox-container');
        let completedCount = 0;
        checkBoxes.forEach(box => {
            if (box.dataset.status === 'true') {
                completedCount++;
            }
        });
        const totalItems = checklistItems.length;
        const percentage = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
        percentageSpan.textContent = `${percentage}%`;
        let color = "#dc3545";
        if (percentage >= 100) color = "#28a745";
        else if (percentage >= 50) color = "#ffc107";
        percentageSpan.style.color = color;
    }

    checklistBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('checkbox-container')) {
            const checkbox = e.target;
            const currentStatus = checkbox.dataset.status;
            if (currentStatus === 'true') {
                checkbox.dataset.status = 'false';
                checkbox.classList.remove('checked');
                checkbox.classList.add('unchecked');
                checkbox.textContent = '✗';
            } else if (currentStatus === 'false') {
                checkbox.dataset.status = '';
                checkbox.classList.remove('unchecked');
                checkbox.textContent = '';
            } else {
                checkbox.dataset.status = 'true';
                checkbox.classList.add('checked');
                checkbox.textContent = '✓';
            }
            updateLivePercentage(currentEmployeeId);
        }
    });

    saveChecklistBtn.addEventListener('click', () => {
        if (!currentEmployeeId) return;
        const employee = allEmployees[currentEmployeeId];
        if (!employee.checklist) employee.checklist = {};
        checklistBody.querySelectorAll('.checkbox-container').forEach(box => {
            const itemId = box.dataset.itemId;
            const statusStr = box.dataset.status;
            let status = null;
            if (statusStr === 'true') status = true;
            else if (statusStr === 'false') status = false;
            if (!employee.checklist[itemId]) employee.checklist[itemId] = {};
            employee.checklist[itemId].status = status;
        });
        checklistBody.querySelectorAll('.notes-input').forEach(input => {
            const itemId = input.dataset.itemId;
            if (!employee.checklist[itemId]) employee.checklist[itemId] = {};
            employee.checklist[itemId].notes = input.value;
        });
        employee.condition = conditionActivo.checked ? 'activo' : (conditionNoActivo.checked ? 'no_activo' : null);
        employee.noAplicaAreas = noAplicaAreas.checked;
        addHistoryEntry(currentEmployeeId, 'Checklist guardado.');
        saveAllEmployees();
        renderEmployeeList(searchBar.value.trim());
        displayMessage('Checklist guardado.', 'success');
    });

    newChecklistBtn.addEventListener('click', () => {
        resetChecklistUI();
        displayMessage('Vista limpiada.', 'info');
    });

    async function generateChecklistSummaryPdf(action = 'download') {
        try {
            const employees = Object.values(allEmployees);
            if (employees.length === 0) {
                displayMessage('No hay datos para el reporte.', 'warning');
                return;
            }
            const {
                jsPDF
            } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'p',
                unit: 'pt',
                format: 'a4'
            });
            const pageMargin = 40;
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            let currentY = 0;
            const user = localStorage.getItem('loggedInUser') || "Desconocido";
            const renderChartToImage = (config, width, height) => {
                try {
                    if (currentChart) {
                        currentChart.destroy();
                    }
                    chartCanvas.width = width;
                    chartCanvas.height = height;
                    const ctx = chartCanvas.getContext('2d');
                    ctx.clearRect(0, 0, width, height);
                    const newConfig = { ...config,
                        options: { ...config.options,
                            animation: false,
                            events: [],
                            responsive: false
                        }
                    };
                    currentChart = new Chart(ctx, newConfig);
                    return currentChart.toBase64Image('image/png');
                } catch (e) {
                    console.error("Error al renderizar gráfico:", e);
                    return null;
                }
            };
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(20);
            doc.text('Reporte General de Personal', pageWidth / 2, 60, {
                align: 'center'
            });
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(100);
            doc.text(`Generado por: ${user} el: ${new Date().toLocaleDateString('es-ES')}`, pageWidth / 2, 80, {
                align: 'center'
            });
            currentY = 110;
            const totalEmployees = employees.length;
            const conditionCounts = {
                'activo': 0,
                'no_activo': 0,
                'sin_estado': 0
            };
            const areaStats = {};
            const completionStatusCounts = {
                'completado': 0,
                'avanzado': 0,
                'incompleto': 0
            };
            const missingDocsStats = {};
            checklistItems.forEach(item => {
                missingDocsStats[item.id] = {
                    name: item.name,
                    count: 0
                };
            });
            let totalPercentageSum = 0;
            employees.forEach(emp => {
                const area = emp.area || 'Sin Área';
                if (!areaStats[area]) {
                    areaStats[area] = {
                        count: 0,
                        totalPercentage: 0
                    };
                }
                areaStats[area].count++;
                const percentage = calculateCompletionPercentage(emp);
                areaStats[area].totalPercentage += percentage;
                totalPercentageSum += percentage;
                if (emp.condition === 'activo') conditionCounts.activo++;
                else if (emp.condition === 'no_activo') conditionCounts.no_activo++;
                else conditionCounts.sin_estado++;
                if (percentage === 100) completionStatusCounts.completado++;
                else if (percentage >= 50) completionStatusCounts.avanzado++;
                else completionStatusCounts.incompleto++;
                checklistItems.forEach(item => {
                    const itemData = emp.checklist[item.id];
                    if (!itemData || itemData.status !== true) {
                        missingDocsStats[item.id].count++;
                    }
                });
            });
            const averageCompletion = totalEmployees > 0 ? Math.round(totalPercentageSum / totalEmployees) : 0;

            function drawCard(x, y, width, height, title, value, titleColor = [0, 0, 0], bgColor = [245, 245, 245]) {
                doc.setFillColor(bgColor[0], bgColor[1], bgColor[2]);
                doc.roundedRect(x, y, width, height, 5, 5, 'F');
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(10);
                doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
                doc.text(title, x + 15, y + 20);
                doc.setFontSize(24);
                doc.text(value, x + 15, y + 50);
            }
            const cardWidth = 120;
            const cardHeight = 70;
            const cardGap = (pageWidth - (pageMargin * 2) - (cardWidth * 4)) / 3;
            drawCard(pageMargin, currentY, cardWidth, cardHeight, "Total Colaboradores", String(totalEmployees));
            drawCard(pageMargin + cardWidth + cardGap, currentY, cardWidth, cardHeight, "Avance Promedio", `${averageCompletion}%`, [0, 86, 179]);
            drawCard(pageMargin + 2 * (cardWidth + cardGap), currentY, cardWidth, cardHeight, "Activos", String(conditionCounts.activo), [34, 139, 34], [220, 255, 220]);
            drawCard(pageMargin + 3 * (cardWidth + cardGap), currentY, cardWidth, cardHeight, "No Activos", String(conditionCounts.no_activo), [220, 20, 60], [255, 220, 220]);
            currentY += cardHeight + 40;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
            doc.text('Resumen de Documentación', pageMargin, currentY);
            currentY += 25;
            const pieChartConfig = {
                type: 'pie',
                data: {
                    labels: [`Completado (100%)`, `Avanzado (50-99%)`, `Incompleto (<50%)`],
                    datasets: [{
                        data: [completionStatusCounts.completado, completionStatusCounts.avanzado, completionStatusCounts.incompleto],
                        backgroundColor: ['rgba(40, 167, 69, 0.8)', 'rgba(255, 193, 7, 0.8)', 'rgba(220, 53, 69, 0.8)'],
                        borderColor: ['#28a745', '#ffc107', '#dc3545'],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            position: 'right'
                        }
                    }
                }
            };
            const pieChartImage = renderChartToImage(pieChartConfig, 400, 200);
            if (pieChartImage) doc.addImage(pieChartImage, 'PNG', pageMargin, currentY, 200, 100);
            const missingDocsData = Object.values(missingDocsStats).filter(doc => doc.count > 0).sort((a, b) => b.count - a.count).slice(0, 5).map(doc => [doc.name, `${doc.count}`, `${Math.round((doc.count / totalEmployees) * 100)}%`]);
            if (missingDocsData.length > 0) {
                doc.autoTable({
                    startY: currentY - 5,
                    head: [
                        ['Documentos Más Faltantes', 'Nº', '%']
                    ],
                    body: missingDocsData,
                    margin: {
                        left: pageMargin + 230
                    },
                    theme: 'grid',
                    headStyles: {
                        fillColor: [108, 117, 125],
                        fontSize: 9
                    },
                    bodyStyles: {
                        fontSize: 8
                    },
                    columnStyles: {
                        1: {
                            halign: 'center'
                        },
                        2: {
                            halign: 'center'
                        }
                    }
                });
            }
            currentY += 130;
            if (currentY + 220 > pageHeight) {
                doc.addPage();
                currentY = pageMargin;
            }
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
            doc.text('Desempeño por Área', pageMargin, currentY);
            currentY += 20;
            const getBarColor = (percentage) => {
                if (percentage > 70) return 'rgba(40, 167, 69, 0.8)';
                if (percentage > 40) return 'rgba(255, 193, 7, 0.8)';
                return 'rgba(220, 53, 69, 0.8)';
            };
            const areaLabels = Object.keys(areaStats);
            const averagePercentagesByArea = areaLabels.map(area => {
                const stats = areaStats[area];
                return stats.count > 0 ? Math.round(stats.totalPercentage / stats.count) : 0;
            });
            const backgroundColors = averagePercentagesByArea.map(p => getBarColor(p));
            const barChartConfig = {
                type: 'bar',
                data: {
                    labels: areaLabels,
                    datasets: [{
                        label: 'Avance Promedio por Área (%)',
                        data: averagePercentagesByArea,
                        backgroundColor: backgroundColors,
                        borderColor: backgroundColors.map(c => c.replace('0.8', '1')),
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            };
            const barChartImage = renderChartToImage(barChartConfig, 800, 400);
            if (barChartImage) {
                const pdfChartWidth = pageWidth - (pageMargin * 2);
                const pdfChartHeight = (pdfChartWidth / 800) * 400;
                doc.addImage(barChartImage, 'PNG', pageMargin, currentY, pdfChartWidth, pdfChartHeight);
                currentY += pdfChartHeight + 30;
            }
            if (currentY + 100 > pageHeight) {
                doc.addPage();
                currentY = pageMargin;
            }
            const employeesToAlert = employees.map(e => ({ ...e,
                percentage: calculateCompletionPercentage(e)
            })).filter(e => e.percentage < 100).sort((a, b) => a.percentage - b.percentage).slice(0, 5);
            if (employeesToAlert.length > 0) {
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(14);
                doc.text('Colaboradores con Menor Avance', pageMargin, currentY);
                currentY += 20;
                const alertData = employeesToAlert.map(emp => [emp.full_name, emp.dni, emp.area || 'N/A', `${emp.percentage}%`]);
                doc.autoTable({
                    startY: currentY,
                    head: [
                        ['Nombre Completo', 'DNI', 'Área', 'Avance']
                    ],
                    body: alertData,
                    headStyles: {
                        fillColor: [220, 53, 69],
                        fontStyle: 'bold'
                    },
                    margin: {
                        left: pageMargin,
                        right: pageMargin
                    }
                });
                currentY = doc.lastAutoTable.finalY + 30;
            }
            if (currentY + 60 > pageHeight) {
                doc.addPage();
                currentY = pageMargin;
            }
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
            doc.text('Detalle General de Colaboradores', pageMargin, currentY);
            currentY += 20;
            const employeeData = employees.sort((a, b) => a.full_name.localeCompare(b.full_name)).map(emp => [emp.full_name, emp.dni, emp.area || 'N/A', emp.condition ? (emp.condition === 'activo' ? 'Activo' : 'No Activo') : 'Sin Estado', `${calculateCompletionPercentage(emp)}%`]);
            doc.autoTable({
                startY: currentY,
                head: [
                    ['Nombre Completo', 'DNI', 'Área', 'Estado', 'Avance']
                ],
                body: employeeData,
                headStyles: {
                    fillColor: [41, 128, 186],
                    fontStyle: 'bold'
                },
                margin: {
                    left: pageMargin,
                    right: pageMargin
                }
            });
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                doc.setFontSize(9);
                doc.setTextColor(150);
                doc.text(`Página ${i} de ${pageCount}`, pageWidth - pageMargin, pageHeight - 20, {
                    align: 'right'
                });
            }
            if (action === 'view') {
                displayMessage('Generando previsualización...', 'info');
                const previewWindow = window.open();
                if (previewWindow) {
                    previewWindow.document.write('<html><head><title>Previsualización</title></head><body style="margin:0; padding:0; overflow:hidden;"><iframe src="' + doc.output('datauristring') + '" style="width:100%; height:100%; border:none;"></iframe></body></html>');
                    previewWindow.document.close();
                } else {
                    displayMessage('Habilita las ventanas emergentes.', 'warning');
                }
            } else {
                doc.save('Reporte_General_Personal.pdf');
                displayMessage('Reporte generado.', 'success');
            }
        } catch (error) {
            console.error("Error al generar PDF:", error);
            displayMessage('Error al generar el reporte.', 'error');
        } finally {
            if (currentChart) {
                currentChart.destroy();
                currentChart = null;
            }
        }
    }

    // --- Funciones del Módulo de Mantenimiento ---
    function getMaintenanceDataKey() {
        return `maintenance_reports_global`;
    }

    function updateAllNotifications() {
        const pendingReportsCount = Object.values(allMaintenanceReports).filter(report => report.status === 'PENDIENTE').length;
        const newAlertsCount = Object.values(allTechnicalAlerts).filter(alert => alert.status === 'new').length;
        const totalNotifications = pendingReportsCount + newAlertsCount;
        if (totalNotifications > 0) {
            maintenanceNotificationBadge.textContent = totalNotifications;
            maintenanceNotificationBadge.style.display = 'flex';
        } else {
            maintenanceNotificationBadge.style.display = 'none';
        }
        if (pendingReportsBtnBadge) {
            if (pendingReportsCount > 0) {
                pendingReportsBtnBadge.textContent = pendingReportsCount;
                pendingReportsBtnBadge.style.display = 'flex';
            } else {
                pendingReportsBtnBadge.style.display = 'none';
            }
        }
        if (alertsNotificationBadge) {
            if (newAlertsCount > 0) {
                alertsNotificationBadge.textContent = newAlertsCount;
                alertsNotificationBadge.style.display = 'flex';
            } else {
                alertsNotificationBadge.style.display = 'none';
            }
        }
    }

    function loadAllMaintenanceReports() {
        const maintenanceDataKey = getMaintenanceDataKey();
        const storedReports = localStorage.getItem(maintenanceDataKey);
        allMaintenanceReports = storedReports ? JSON.parse(storedReports) : {};
        renderMaintenanceReportsList();
    }

    function saveAllMaintenanceReports() {
        const maintenanceDataKey = getMaintenanceDataKey();
        localStorage.setItem(maintenanceDataKey, JSON.stringify(allMaintenanceReports));
        updateAllNotifications();
    }

    function addReportHistoryEntry(reportId, action, user) {
        if (!allMaintenanceReports[reportId]) return;
        if (!allMaintenanceReports[reportId].history) {
            allMaintenanceReports[reportId].history = [];
        }
        const entry = {
            timestamp: new Date().toISOString(),
            user: user || 'Sistema',
            action: action,
        };
        allMaintenanceReports[reportId].history.unshift(entry);
    }

    function generateReportId() {
        const today = new Date();
        const year = today.getFullYear().toString();
        let maxCorrelative = 0;
        const prefix = `CP-${year}`;
        for (const id in allMaintenanceReports) {
            if (id.startsWith(prefix)) {
                const correlativePart = parseInt(id.slice(id.lastIndexOf('-') + 1), 10);
                if (!isNaN(correlativePart) && correlativePart > maxCorrelative) {
                    maxCorrelative = correlativePart;
                }
            }
        }
        const nextCorrelative = (maxCorrelative + 1).toString().padStart(3, '0');
        return `${prefix}-${nextCorrelative}`;
    }

    function populateSelectOptions(selectElement, optionsArray, addDefault = true) {
        if (!selectElement) return;
        const currentValue = selectElement.value;
        selectElement.innerHTML = addDefault ? '<option value="">-- Seleccionar --</option>' : '';
        optionsArray.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            selectElement.appendChild(opt);
        });
        if (currentValue) {
            selectElement.value = currentValue;
        }
    }

    function populateDatalistOptions(datalistElement, optionsArray) {
        if (!datalistElement) return;
        datalistElement.innerHTML = '';
        optionsArray.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            datalistElement.appendChild(opt);
        });
    }

    function clearPhotoThumbnails() {
        thumb1.style.backgroundImage = '';
        thumb2.style.backgroundImage = '';
        thumb3.style.backgroundImage = '';
        photoInput1.value = '';
        photoInput2.value = '';
        photoInput3.value = '';
        photoTitle1.value = '';
        photoTitle2.value = '';
        photoTitle3.value = '';
    }

    function resetMaintenanceForm() {
        const isTechnicianLocked = responsibleTechnicianSelect.disabled;
        const technicianValue = responsibleTechnicianSelect.value;
        maintenanceForm.reset();
        reportIdInput.value = generateReportId();
        currentReportId = null;
        saveReportBtn.textContent = 'Guardar Reporte';
        maintenanceMessage.textContent = '';
        if (signaturePad) signaturePad.clear();
        clearPhotoThumbnails();
        if (isTechnicianLocked) {
            responsibleTechnicianSelect.value = technicianValue;
            responsibleTechnicianSelect.disabled = true;
        }
        window.scrollTo(0, 0);
    }

    function renderMaintenanceReportsList() {
        maintenanceReportListBody.innerHTML = '';
        let reportsToDisplay = Object.values(allMaintenanceReports).sort((a, b) => new Date(b.incidenceDate) - new Date(a.incidenceDate));
        const filters = currentMaintenanceFilters;
        const hasFilters = Object.values(filters).some(val => val !== '' && val !== null && val !== undefined);
        if (hasFilters) {
            reportsToDisplay = reportsToDisplay.filter(report => {
                const statusMatch = !filters.status || report.status === filters.status;
                const equipmentMatch = !filters.equipmentName || (report.equipmentName && report.equipmentName.toLowerCase().includes(filters.equipmentName.toLowerCase()));
                const typeMatch = !filters.maintenanceType || report.maintenanceType === filters.maintenanceType;
                const startDateMatch = !filters.startDate || (report.incidenceDate && new Date(report.incidenceDate) >= new Date(filters.startDate + 'T00:00:00'));
                const endDateMatch = !filters.endDate || (report.incidenceDate && new Date(report.incidenceDate) <= new Date(filters.endDate + 'T23:59:59'));
                return statusMatch && equipmentMatch && typeMatch && startDateMatch && endDateMatch;
            });
        } else {
            reportsToDisplay = reportsToDisplay.slice(0, 50);
        }
        if (reportsToDisplay.length === 0) {
            maintenanceReportListBody.innerHTML = `<tr><td colspan="7" style="text-align:center;">${hasFilters ? 'No hay reportes que coincidan.' : 'No hay reportes. Cree uno nuevo.'}</td></tr>`;
            return;
        }
        reportsToDisplay.forEach(report => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${report.reportId}</td>
                <td>${report.status || ''}</td>
                <td>${report.incidenceDate || ''}</td>
                <td>${report.equipmentName || ''}</td>
                <td>${report.maintenanceType || ''}</td>
                <td>${report.responsibleTechnician || ''}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${report.reportId}" title="Editar">Modificar</button>
                    <button class="action-btn" data-id="${report.reportId}" data-action="view-pdf" title="Ver PDF">Ver PDF</button>
                    <button class="action-btn delete-btn" data-id="${report.reportId}" title="Eliminar">Eliminar</button>
                </td>
            `;
            row.querySelector('.edit-btn').addEventListener('click', (e) => editMaintenanceReport(e.target.dataset.id));
            row.querySelector('.delete-btn').addEventListener('click', (e) => deleteMaintenanceReport(e.target.dataset.id));
            row.querySelector('button[data-action="view-pdf"]').addEventListener('click', (e) => generateAndActionPdf(e.target.dataset.id, 'view'));
            maintenanceReportListBody.appendChild(row);
        });
    }

    function editMaintenanceReport(reportId) {
        const report = allMaintenanceReports[reportId];
        if (report) {
            const userRole = localStorage.getItem('loggedInUserRole');
            responsibleTechnicianSelect.disabled = userRole === 'mantenimiento';
            currentReportId = reportId;
            reportIdInput.value = report.reportId;
            statusSelect.value = report.status;
            incidenceDateInput.value = report.incidenceDate;
            attentionDateInput.value = report.attentionDate;
            deliveryDateInput.value = report.deliveryDate;
            horaInicioInput.value = report.horaInicio || '';
            horaFinalizadaInput.value = report.horaFinalizada || '';
            equipmentNameInput.value = report.equipmentName;
            maintenanceTypeSelect.value = report.maintenanceType;
            reportedIncidenceInput.value = report.reportedIncidence;
            reviewedComponentInput.value = report.reviewedComponent;
            observationsInput.value = report.observations;
            workDoneInput.value = report.workDone;
            sparePartsUsedInput.value = report.sparePartsUsed;
            responsibleTechnicianSelect.value = report.responsibleTechnician;
            operatorInShiftInput.value = report.operatorInShift;
            signaturePad.clear();
            if (report.vb && report.vb.startsWith('data:image')) {
                signaturePad.fromDataURL(report.vb);
            }
            clearPhotoThumbnails();
            if (report.photo1) thumb1.style.backgroundImage = `url(${report.photo1})`;
            if (report.photo2) thumb2.style.backgroundImage = `url(${report.photo2})`;
            if (report.photo3) thumb3.style.backgroundImage = `url(${report.photo3})`;
            photoTitle1.value = report.photoTitle1 || '';
            photoTitle2.value = report.photoTitle2 || '';
            photoTitle3.value = report.photoTitle3 || '';
            saveReportBtn.textContent = 'Actualizar Reporte';
            maintenanceMessage.textContent = `Cargado: ${reportId}`;
            maintenanceMessage.style.color = 'blue';
            window.scrollTo(0, 0);
        } else {
            displayMessage('Error: Reporte no encontrado.', 'error');
        }
    }

    function deleteMaintenanceReport(reportId) {
        showConfirm(`¿Seguro que quieres eliminar el reporte ${reportId}?`, () => {
            delete allMaintenanceReports[reportId];
            saveAllMaintenanceReports();
            renderMaintenanceReportsList();
            if (currentReportId === reportId) {
                resetMaintenanceForm();
            }
            displayMessage('Reporte eliminado.', 'success');
        });
    }

    function generateAndActionPdf(reportId, action) {
        const report = allMaintenanceReports[reportId];
        if (!report) {
            displayMessage('No se encontraron datos para el PDF.', 'error');
            return;
        }
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const margin = 15;
        const pageHeight = doc.internal.pageSize.getHeight();
        const pageWidth = doc.internal.pageSize.getWidth();
        const usableWidth = pageWidth - (margin * 2);
        const colWidth = (usableWidth - 10) / 2;
        const leftColX = margin;
        const rightColX = margin + colWidth + 10;
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('REPORTE DE MANTENIMIENTO', pageWidth / 2, 20, { align: 'center' });
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        let currentY = 35;
        const lineSpacing = 6;
        doc.text('ID:', leftColX, currentY);
        doc.text('FECHA DE INCIDENCIA:', leftColX, currentY + lineSpacing);
        doc.text('FECHA DE ATENCION:', leftColX, currentY + lineSpacing * 2);
        doc.text('HORA INICIO:', leftColX, currentY + lineSpacing * 3);
        doc.text('TIPO DE MANTENIMIENTO:', leftColX, currentY + lineSpacing * 4);
        doc.text('ESTATUS:', rightColX, currentY);
        doc.text('FECHA DE ENTREGA:', rightColX, currentY + lineSpacing);
        doc.text('HORA FINALIZADA:', rightColX, currentY + lineSpacing * 2);
        doc.setFont('helvetica', 'normal');
        doc.text(report.reportId || 'N/A', leftColX + 45, currentY);
        doc.text(report.incidenceDate || 'N/A', leftColX + 45, currentY + lineSpacing);
        doc.text(report.attentionDate || 'N/A', leftColX + 45, currentY + lineSpacing * 2);
        doc.text(report.horaInicio || 'N/A', leftColX + 45, currentY + lineSpacing * 3);
        doc.text(report.maintenanceType || 'N/A', leftColX + 45, currentY + lineSpacing * 4);
        doc.text(report.status || 'N/A', rightColX + 35, currentY);
        doc.text(report.deliveryDate || 'N/A', rightColX + 35, currentY + lineSpacing);
        doc.text(report.horaFinalizada || 'N/A', rightColX + 35, currentY + lineSpacing * 2);
        currentY += (lineSpacing * 5) + 5;
        const drawBox = (title, content, x, y, width) => {
            doc.setFillColor(217, 234, 255);
            doc.setDrawColor(150);
            doc.setLineWidth(0.2);
            const titleBarHeight = 8;
            const textPadding = 3;
            const textLineHeight = 4;
            doc.rect(x, y, width, titleBarHeight, 'F');
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0);
            doc.text(title, x + 2, y + 5.5);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9);
            const textLines = doc.splitTextToSize(content || 'N/A', width - (textPadding * 2));
            const contentHeight = (textLines.length * textLineHeight) + (textPadding * 2);
            doc.rect(x, y + titleBarHeight, width, contentHeight, 'S');
            doc.text(textLines, x + textPadding, y + titleBarHeight + textPadding + (textLineHeight - 1));
            return y + titleBarHeight + contentHeight;
        };
        let leftColY = currentY;
        let rightColY = currentY;
        const vGap = 5;
        leftColY = drawBox('NOMBRE DE EQUIPO', report.equipmentName, leftColX, leftColY, colWidth);
        rightColY = drawBox('COMPONENTE REVISADO', report.reviewedComponent, rightColX, rightColY, colWidth);
        leftColY = drawBox('TRABAJO REALIZADO', report.workDone, leftColX, leftColY + vGap, colWidth);
        rightColY = drawBox('OBSERVACIONES', report.observations, rightColX, rightColY + vGap, colWidth);
        leftColY = drawBox('REPUESTOS EMPLEADOS', report.sparePartsUsed, leftColX, leftColY + vGap, colWidth);
        rightColY = drawBox('TECNICO', report.responsibleTechnician, rightColX, rightColY + vGap, colWidth);
        currentY = Math.max(leftColY, rightColY) + 5;
        const photosWithTitles = [{ data: report.photo1, title: report.photoTitle1 }, { data: report.photo2, title: report.photoTitle2 }, { data: report.photo3, title: report.photoTitle3 }].filter(p => p.data);
        if (photosWithTitles.length > 0) {
            const imageWidth = 55;
            const imageHeight = 41.25;
            const titleHeight = 5;
            const totalBlockHeight = imageHeight + titleHeight + 5;
            const imageGap = (usableWidth - (photosWithTitles.length * imageWidth)) / (photosWithTitles.length + 1);
            if (currentY + totalBlockHeight + 10 > pageHeight - margin) {
                doc.addPage();
                currentY = margin;
            }
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.text('EVIDENCIA FOTOGRÁFICA', leftColX, currentY + 5);
            currentY += 12;
            photosWithTitles.forEach((photoItem, index) => {
                const xPos = margin + (imageGap * (index + 1)) + (imageWidth * index);
                const yPosTitle = currentY;
                const yPosImage = yPosTitle + titleHeight - 2;
                try {
                    if (photoItem.title) {
                        doc.setFontSize(8);
                        doc.setFont('helvetica', 'italic');
                        doc.setTextColor(80);
                        doc.text(photoItem.title, xPos + imageWidth / 2, yPosTitle, { align: 'center', maxWidth: imageWidth });
                    }
                    doc.addImage(photoItem.data, 'PNG', xPos, yPosImage, imageWidth, imageHeight);
                } catch (e) {
                    console.error("Error al añadir foto a PDF:", e);
                    doc.setFont('helvetica', 'normal');
                    doc.setTextColor(255, 0, 0);
                    doc.text('[Error]', xPos + (imageWidth / 2), yPosImage + (imageHeight / 2), { align: 'center' });
                } finally {
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(0);
                }
            });
            currentY += totalBlockHeight;
        }
        if (report.vb && report.vb.startsWith('data:image')) {
            if (currentY + 25 > pageHeight - margin) {
                doc.addPage();
                currentY = margin;
            }
            try {
                doc.setFontSize(10);
                doc.setFont('helvetica', 'bold');
                doc.text('VºBº:', rightColX + 30, currentY + 15);
                doc.addImage(report.vb, 'PNG', rightColX + 40, currentY + 5, 35, 18);
            } catch (e) {
                console.error("Error al añadir firma a PDF:", e);
                doc.text('[Error de firma]', rightColX + 30, currentY + 15);
            }
        }
        if (action === 'view') {
            doc.output('dataurlnewwindow');
        } else if (action === 'download') {
            doc.save(`Reporte_Mantenimiento_${report.reportId}.pdf`);
        }
    }

    function displayMessage(message, type = 'info') {
        const messageBox = document.createElement('div');
        messageBox.className = `custom-message-box ${type}`;
        messageBox.textContent = message;
        document.body.appendChild(messageBox);
        setTimeout(() => {
            messageBox.classList.add('hide');
            messageBox.addEventListener('transitionend', () => messageBox.remove());
        }, 3000);
    }

    function showConfirm(message, onConfirm) {
        const confirmModal = document.createElement('div');
        confirmModal.className = 'modal confirm-modal';
        confirmModal.style.display = 'flex';
        confirmModal.innerHTML = `
            <div class="modal-content">
                <h2>Confirmación</h2><p>${message}</p>
                <div class="modal-actions">
                    <button id="confirmYesBtn" class="action-btn">Sí</button>
                    <button id="confirmNoBtn" class="action-btn cancel-btn">No</button>
                </div>
            </div>`;
        document.body.appendChild(confirmModal);
        document.getElementById('confirmYesBtn').addEventListener('click', () => {
            onConfirm();
            confirmModal.remove();
        });
        document.getElementById('confirmNoBtn').addEventListener('click', () => {
            confirmModal.remove();
        });
    }

    function showWelcomeMessage(userObject) {
        const overlay = document.createElement('div');
        overlay.id = 'welcomeOverlay';
        const messageBox = document.createElement('div');
        messageBox.id = 'welcomeBox';
        const saludoVisual = usuariasFemeninas.includes(userObject.usuario) ? '¡BIENVENIDA' : '¡BIENVENIDO';
        const userName = userObject.usuario.toUpperCase();
        messageBox.innerHTML = `<h1>${saludoVisual}, ${userName}! 👋</h1><p>Te damos la bienvenida a COPESUL SAC</p>`;
        overlay.appendChild(messageBox);
        document.body.appendChild(overlay);
        setTimeout(() => {
            overlay.classList.add('visible');
        }, 10);
        setTimeout(() => {
            overlay.classList.remove('visible');
            overlay.addEventListener('transitionend', () => overlay.remove());
        }, 7000);
    }

    function initializeSignaturePad() {
        if (!signatureCanvas) return;
        signaturePad = new SignaturePad(signatureCanvas, {
            backgroundColor: 'rgb(255, 255, 255)'
        });
        clearSignatureBtn.addEventListener('click', () => signaturePad.clear());

        function resizeCanvas() {
            if (!signaturePad) return;
            const ratio = Math.max(window.devicePixelRatio || 1, 1);
            signatureCanvas.width = signatureCanvas.offsetWidth * ratio;
            signatureCanvas.height = signatureCanvas.offsetHeight * ratio;
            signatureCanvas.getContext("2d").scale(ratio, ratio);
            signaturePad.clear();
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
    }

    function displayPendingReports() {
        pendingReportsListContainer.innerHTML = '';
        const pendingReports = Object.values(allMaintenanceReports)
            .filter(report => report.status === 'PENDIENTE')
            .sort((a, b) => new Date(a.incidenceDate) - new Date(b.incidenceDate));
        if (pendingReports.length === 0) {
            pendingReportsListContainer.innerHTML = '<p style="text-align: center; padding: 20px;">No hay reportes pendientes.</p>';
            return;
        }
        const header = document.createElement('div');
        header.className = 'pending-report-item';
        header.innerHTML = `<div style="font-weight: bold;">ID</div><div><b>Equipo</b></div><div><b>F. Incidencia</b></div><div><b>Técnico</b></div>`;
        header.style.cursor = 'default';
        header.style.backgroundColor = '#f8f9fa';
        pendingReportsListContainer.appendChild(header);
        pendingReports.forEach(report => {
            const item = document.createElement('div');
            item.className = 'pending-report-item';
            item.dataset.id = report.reportId;
            item.innerHTML = `<div class="report-id">${report.reportId}</div><div>${report.equipmentName || 'N/A'}</div><div>${report.incidenceDate || 'N/A'}</div><div>${report.responsibleTechnician || 'N/A'}</div>`;
            pendingReportsListContainer.appendChild(item);
        });
    }

    viewPendingBtn.addEventListener('click', () => {
        displayPendingReports();
        pendingReportsModal.style.display = 'flex';
    });
    closePendingReportsModalBtn.addEventListener('click', () => pendingReportsModal.style.display = 'none');
    pendingReportsListContainer.addEventListener('click', (e) => {
        const reportItem = e.target.closest('.pending-report-item');
        if (reportItem && reportItem.dataset.id) {
            editMaintenanceReport(reportItem.dataset.id);
            pendingReportsModal.style.display = 'none';
        }
    });

    function parseFechaExcel(valor) {
        if (typeof valor === 'number') {
            const base = new Date(1899, 11, 30);
            return new Date(base.getTime() + valor * 86400000);
        } else if (valor instanceof Date) {
            return valor;
        } else if (typeof valor === 'string') {
            const partes = valor.split(/[\/\-]/);
            if (partes.length === 3) {
                let [dia, mes, anio] = partes.map(Number);
                if (String(anio).length === 2) anio += 2000;
                return new Date(anio, mes - 1, dia);
            }
        }
        return null;
    }

    function cargarYProcesarExcel() {
        const input = document.getElementById('archivoExcel');
        const file = input.files[0];
        if (!file) {
            displayMessage("Por favor, selecciona un archivo Excel.", 'warning');
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {
                    type: 'array',
                    cellDates: true
                });
                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                const json = XLSX.utils.sheet_to_json(sheet);
                const contenedor = document.getElementById('resultado');
                let cardsHtml = "";
                if (json.length === 0) {
                    cardsHtml = "<p style='text-align:center;'>No se encontraron datos en el archivo.</p>";
                    contenedor.innerHTML = cardsHtml;
                    equipmentStatusData = cardsHtml;
                    return;
                }
                json.forEach(row => {
                    const equipo = row['Equipo'];
                    const fechaUltima = parseFechaExcel(row['FECHA ULTIMA INTERVENCION']);
                    const intervalo = parseInt(row['CADA CUANTO TIEMPO SE REALIZA INTERVENCION']);
                    if (!equipo || !fechaUltima || isNaN(intervalo) || intervalo <= 0) return;
                    const hoy = new Date();
                    hoy.setHours(0, 0, 0, 0);
                    const fechaProxima = new Date(fechaUltima);
                    fechaProxima.setDate(fechaProxima.getDate() + intervalo);
                    const diasTranscurridos = Math.max(0, Math.floor((hoy - fechaUltima) / (1000 * 60 * 60 * 24)));
                    const diasTotales = intervalo;
                    const diasRestantes = Math.max(0, diasTotales - diasTranscurridos);
                    const porcentaje = Math.min(100, Math.floor((diasTranscurridos / diasTotales) * 100));
                    let color, claseParpadeo = '';
                    if (porcentaje < 75) {
                        color = "linear-gradient(to right, #26a69a, #80cbc4)";
                    } else if (porcentaje < 90) {
                        color = "linear-gradient(to right, #ffa726, #ffcc80)";
                    } else {
                        color = "linear-gradient(to right, #ef5350, #e57373)";
                        claseParpadeo = 'parpadeo';
                    }
                    cardsHtml += `<div class="card"><div class="titulo">${equipo}</div><div class="info"><strong>Últ. Intervención:</strong> ${fechaUltima.toLocaleDateString('es-ES')}<br><strong>Próx. Intervención:</strong> ${fechaProxima.toLocaleDateString('es-ES')}<br><strong>Días Restantes:</strong> ${diasRestantes} de ${diasTotales}</div><div class="barra"><div class="progreso ${claseParpadeo}" style="width: ${porcentaje}%; background: ${color};">${porcentaje}%</div></div></div>`;
                });
                contenedor.innerHTML = cardsHtml;
                equipmentStatusData = cardsHtml;
                displayMessage("Archivo procesado.", "success");
            } catch (error) {
                console.error("Error al procesar Excel:", error);
                const errorMsg = "<p style='text-align:center; color:red;'>Error al procesar el archivo.</p>";
                document.getElementById('resultado').innerHTML = errorMsg;
                equipmentStatusData = errorMsg;
                displayMessage("Error al leer el archivo. Verifique el formato.", "error");
            }
        };
        reader.readAsArrayBuffer(file);
    }

    function openEquipmentStatusModal() {
        const contenedor = document.getElementById('resultado');
        contenedor.innerHTML = equipmentStatusData || "<p style='text-align:center;'>Carga un archivo Excel para ver el estado.</p>";
        document.getElementById('archivoExcel').value = '';
        document.getElementById('loadExcelBtn').onclick = cargarYProcesarExcel;
        document.getElementById('refreshStatusBtn').onclick = () => {
            equipmentStatusData = null;
            contenedor.innerHTML = "<p style='text-align:center;'>Carga un archivo Excel para ver el estado.</p>";
            document.getElementById('archivoExcel').value = '';
            displayMessage('Vista limpiada.', 'info');
        };
        equipmentStatusModal.style.display = 'flex';
    }

    equipmentStatusBtn.addEventListener('click', openEquipmentStatusModal);
    closeEquipmentStatusModalBtn.addEventListener('click', () => equipmentStatusModal.style.display = 'none');

    function showMaintenancePage(prefillData = null) {
        mainDashboardPage.style.display = 'none';
        appPage.style.display = 'none';
        alertsListModal.style.display = 'none';
        maintenancePage.style.display = 'flex';
        populateSelectOptions(statusSelect, STATUS_OPTIONS, false);
        populateSelectOptions(searchStatus, STATUS_OPTIONS, true);
        populateDatalistOptions(document.getElementById('equipment-list'), EQUIPMENT_OPTIONS);
        populateDatalistOptions(document.getElementById('search-equipment-list'), EQUIPMENT_OPTIONS);
        populateSelectOptions(maintenanceTypeSelect, MAINTENANCE_TYPE_OPTIONS, false);
        populateSelectOptions(searchMaintenanceType, MAINTENANCE_TYPE_OPTIONS, true);
        populateSelectOptions(responsibleTechnicianSelect, TECHNICIAN_OPTIONS, false);
        const userRole = localStorage.getItem('loggedInUserRole');
        const userName = localStorage.getItem('loggedInUser');
        if (userRole === 'mantenimiento') {
            const upperCaseUserName = userName.toUpperCase();
            if (TECHNICIAN_OPTIONS.includes(upperCaseUserName)) {
                responsibleTechnicianSelect.value = upperCaseUserName;
                responsibleTechnicianSelect.disabled = true;
            } else {
                responsibleTechnicianSelect.disabled = false;
            }
        } else {
            responsibleTechnicianSelect.disabled = false;
        }
        resetMaintenanceForm();
        if (prefillData) {
            equipmentNameInput.value = prefillData.equipmentName || '';
            reportedIncidenceInput.value = prefillData.reportedIncidence || '';
            statusSelect.value = 'PENDIENTE';
            incidenceDateInput.value = new Date().toISOString().split('T')[0];
            displayMessage('Formulario precargado desde alerta.', 'info');
        }
        loadAllMaintenanceReports();
        loadTechnicalAlerts();
        if (!signaturePad) initializeSignaturePad();
        window.scrollTo(0, 0);
    }

    backToMainFromAppBtn.addEventListener('click', () => {
        appPage.style.display = 'none';
        mainDashboardPage.style.display = 'flex';
    });
    backToMainFromMaintenanceBtn.addEventListener('click', () => {
        maintenancePage.style.display = 'none';
        mainDashboardPage.style.display = 'flex';
    });

    function performLogout() {
        showConfirm('¿Cerrar sesión?', () => {
            localStorage.removeItem('loggedInUser');
            localStorage.removeItem('loggedInUserRole');
            window.location.reload();
        });
    }
    logoutBtn.addEventListener('click', performLogout);
    logoutBtnMaintenance.addEventListener('click', performLogout);
    logoutBtnMain.addEventListener('click', performLogout);
    newReportBtn.addEventListener('click', () => {
        resetMaintenanceForm();
        const userRole = localStorage.getItem('loggedInUserRole');
        if (userRole === 'mantenimiento') {
            responsibleTechnicianSelect.disabled = true;
        }
    });
    openSearchModalBtn.addEventListener('click', () => searchModal.style.display = 'flex');
    closeSearchModalBtn.addEventListener('click', () => searchModal.style.display = 'none');
    applySearchBtn.addEventListener('click', () => {
        currentMaintenanceFilters = {
            startDate: searchStartDate.value,
            endDate: searchEndDate.value,
            status: searchStatus.value,
            equipmentName: searchEquipmentNameInput.value,
            maintenanceType: searchMaintenanceType.value,
        };
        renderMaintenanceReportsList();
        searchModal.style.display = 'none';
    });
    resetSearchBtn.addEventListener('click', () => {
        document.getElementById('searchForm').reset();
        currentMaintenanceFilters = {};
        renderMaintenanceReportsList();
    });
    generateReportFromSearchBtn.addEventListener('click', () => {
        const filters = {
            startDate: searchStartDate.value,
            endDate: searchEndDate.value,
            status: searchStatus.value,
            equipmentName: searchEquipmentNameInput.value,
            maintenanceType: searchMaintenanceType.value
        };
        const sortedReports = Object.values(allMaintenanceReports).sort((a, b) => new Date(b.incidenceDate) - new Date(a.incidenceDate));
        const filteredReports = sortedReports.filter(report => {
            const statusMatch = !filters.status || report.status === filters.status;
            const equipmentMatch = !filters.equipmentName || (report.equipmentName && report.equipmentName.toLowerCase().includes(filters.equipmentName.toLowerCase()));
            const typeMatch = !filters.maintenanceType || report.maintenanceType === filters.maintenanceType;
            const startDateMatch = !filters.startDate || (report.incidenceDate && new Date(report.incidenceDate) >= new Date(filters.startDate + 'T00:00:00'));
            const endDateMatch = !filters.endDate || (report.incidenceDate && new Date(report.incidenceDate) <= new Date(filters.endDate + 'T23:59:59'));
            return statusMatch && equipmentMatch && typeMatch && startDateMatch && endDateMatch;
        });
        if (filteredReports.length === 0) {
            displayMessage('No hay reportes para exportar con esos filtros.', 'warning');
            return;
        }
        const formattedReports = filteredReports.map(report => ({
            "ID REPORTE": report.reportId || '',
            "ESTATUS": report.status || '',
            "FECHA DE INCIDENCIA": report.incidenceDate || '',
            "FECHA DE ATENCION": report.attentionDate || '',
            "FECHA DE ENTREGA": report.deliveryDate || '',
            "HORA INICIO": report.horaInicio || '',
            "HORA FINALIZADA": report.horaFinalizada || '',
            "NOMBRE DE EQUIPO": report.equipmentName || '',
            "TIPO DE MANTENIMIENTO": report.maintenanceType || '',
            "INCIDENCIA REPORTADA": report.reportedIncidence || '',
            "COMPONENTE REVISADO": report.reviewedComponent || '',
            "OBSERVACIONES": report.observations || '',
            "TRABAJO REALIZADO": report.workDone || '',
            "REPUESTOS EMPLEADOS": report.sparePartsUsed || '',
            "TECNICO RESPONSABLE": report.responsibleTechnician || '',
            "OPERADOR EN TURNO": report.operatorInShift || ''
        }));
        const worksheet = XLSX.utils.json_to_sheet(formattedReports);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Reportes");
        XLSX.writeFile(workbook, `Reporte_Mantenimiento_${new Date().toISOString().slice(0, 10)}.xlsx`);
        displayMessage('Reporte Excel generado.', 'success');
        searchModal.style.display = 'none';
    });

    // --- Cierre de Modales Global ---
    window.addEventListener('click', (event) => {
        if (event.target == searchModal) searchModal.style.display = 'none';
        if (event.target == photoPreviewModal) photoPreviewModal.style.display = 'none';
        if (event.target == pendingReportsModal) pendingReportsModal.style.display = 'none';
        if (event.target == alertModal) alertModal.style.display = 'none';
        if (event.target == alertsListModal) alertsListModal.style.display = 'none';
        if (event.target == equipmentStatusModal) equipmentStatusModal.style.display = 'none';
        if (event.target == purchaseRequestModal) purchaseRequestModal.style.display = 'none';
        if (event.target == helpDashboardModal) {
            helpDashboardModal.style.display = 'none';
            helpDashboardContent.innerHTML = '';
        }
        if (event.target == whatsappOverlay) {
            whatsappOverlay.style.display = 'none';
            whatsappConfirmModal.style.display = 'none';
        }
        if (event.target == controlCompraModal) {
            controlCompraModal.style.display = 'none';
        }
    });

    maintenanceForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const toBase64 = file => new Promise((resolve, reject) => {
            if (!file) {
                resolve(null);
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        const existingReport = allMaintenanceReports[currentReportId] || {};
        const photo1_b64 = photoInput1.files[0] ? await toBase64(photoInput1.files[0]) : existingReport.photo1;
        const photo2_b64 = photoInput2.files[0] ? await toBase64(photoInput2.files[0]) : existingReport.photo2;
        const photo3_b64 = photoInput3.files[0] ? await toBase64(photoInput3.files[0]) : existingReport.photo3;
        const signatureData = signaturePad.isEmpty() ? '' : signaturePad.toDataURL();
        const reportData = {
            reportId: reportIdInput.value.trim(),
            status: statusSelect.value,
            incidenceDate: incidenceDateInput.value,
            attentionDate: attentionDateInput.value,
            deliveryDate: deliveryDateInput.value,
            horaInicio: horaInicioInput.value,
            horaFinalizada: horaFinalizadaInput.value,
            equipmentName: equipmentNameInput.value.trim().toUpperCase(),
            maintenanceType: maintenanceTypeSelect.value,
            reportedIncidence: reportedIncidenceInput.value.trim(),
            reviewedComponent: reviewedComponentInput.value.trim(),
            observations: observationsInput.value.trim(),
            workDone: workDoneInput.value.trim(),
            sparePartsUsed: sparePartsUsedInput.value.trim(),
            responsibleTechnician: responsibleTechnicianSelect.value,
            vb: signatureData,
            operatorInShift: operatorInShiftInput.value.trim(),
            photo1: thumb1.style.backgroundImage.includes('url') ? (photo1_b64 || existingReport.photo1) : null,
            photo2: thumb2.style.backgroundImage.includes('url') ? (photo2_b64 || existingReport.photo2) : null,
            photo3: thumb3.style.backgroundImage.includes('url') ? (photo3_b64 || existingReport.photo3) : null,
            photoTitle1: photoTitle1.value.trim(),
            photoTitle2: photoTitle2.value.trim(),
            photoTitle3: photoTitle3.value.trim()
        };
        if (!reportData.incidenceDate || !reportData.equipmentName || !reportData.responsibleTechnician) {
            displayMessage('Fecha, Equipo y Técnico son obligatorios.', 'error');
            return;
        }
        const user = localStorage.getItem('loggedInUser');
        const isUpdating = !!currentReportId;
        const reportIdToSave = isUpdating ? currentReportId : reportData.reportId;
        if (!isUpdating && allMaintenanceReports[reportIdToSave]) {
            displayMessage(`El ID de reporte ${reportIdToSave} ya existe.`, 'error');
            return;
        }
        reportData.history = (isUpdating && allMaintenanceReports[reportIdToSave] ?.history) ? allMaintenanceReports[reportIdToSave].history : [];
        allMaintenanceReports[reportIdToSave] = reportData;
        addReportHistoryEntry(reportIdToSave, isUpdating ? 'Reporte Actualizado' : 'Reporte Creado', user);
        saveAllMaintenanceReports();
        renderMaintenanceReportsList();
        displayMessage(`Reporte ${reportIdToSave} ${isUpdating ? 'actualizado' : 'guardado'}.`, 'success');
        resetMaintenanceForm();
    });

    // --- Funciones del Módulo de Alertas ---
    function getTechnicalAlertsKey() {
        return `technical_alerts_global`;
    }

    function loadTechnicalAlerts() {
        const alertsKey = getTechnicalAlertsKey();
        const storedAlerts = localStorage.getItem(alertsKey);
        allTechnicalAlerts = storedAlerts ? JSON.parse(storedAlerts) : {};
    }

    function saveTechnicalAlerts() {
        const alertsKey = getTechnicalAlertsKey();
        localStorage.setItem(alertsKey, JSON.stringify(allTechnicalAlerts));
        updateAllNotifications();
    }

    function renderAlertsList() {
        alertsListContainer.innerHTML = '';
        const sortedAlerts = Object.values(allTechnicalAlerts).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        if (sortedAlerts.length === 0) {
            alertsListContainer.innerHTML = '<p style="text-align: center; padding: 20px;">No hay alertas técnicas.</p>';
            return;
        }
        sortedAlerts.forEach(alert => {
            const alertItem = document.createElement('div');
            alertItem.className = 'alert-item';
            alertItem.dataset.id = alert.id;
            alertItem.dataset.priority = alert.prioridad;
            if (alert.status === 'seen') {
                alertItem.classList.add('seen');
            }
            const alertDate = new Date(alert.timestamp);
            const formattedDate = alertDate.toLocaleString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            const linkedReportId = alert.linkedReportId || '';
            alertItem.innerHTML = `<div class="alert-item-content"><div class="alert-item-header">${alert.equipo} <span>(${alert.prioridad})</span></div><div class="alert-item-details">${alert.inconveniente}</div><div class="alert-item-link-action" style="margin-top: 10px; display: flex; align-items: center; gap: 8px;"><label for="link-report-${alert.id}" style="font-weight: bold; font-size: 0.9em;">ID Reporte:</label><input type="text" id="link-report-${alert.id}" class="link-report-id-input" placeholder="CP-YYYY-NNN" value="${linkedReportId}" style="padding: 5px; border: 1px solid #ccc; border-radius: 4px; flex-grow: 1;"><button class="action-btn" data-action="link-report" style="background-color: #28a745; padding: 5px 10px;">Vincular</button></div><div class="alert-item-footer">Por: ${alert.user} - ${formattedDate}</div></div><div class="alert-item-create-action"><button class="action-btn-icon" data-action="create-report" title="Crear Reporte"><i class="fas fa-save"></i></button></div><div class="alert-item-side-actions"><button class="action-btn delete-btn" data-action="delete">Eliminar</button><button class="action-btn" data-action="toggle-seen" style="background-color: #17a2b8; min-width: 100px;">${alert.status === 'seen' ? 'No Visto' : 'Visto'}</button></div>`;
            alertsListContainer.appendChild(alertItem);
        });
    }

    alertsListContainer.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;
        const action = button.dataset.action;
        const alertItem = button.closest('.alert-item');
        const alertId = alertItem.dataset.id;
        if (action === 'delete') {
            showConfirm(`¿Eliminar la alerta para "${allTechnicalAlerts[alertId].equipo}"?`, () => {
                delete allTechnicalAlerts[alertId];
                saveTechnicalAlerts();
                renderAlertsList();
                displayMessage('Alerta eliminada.', 'success');
            });
        } else if (action === 'toggle-seen') {
            const alert = allTechnicalAlerts[alertId];
            alert.status = (alert.status === 'seen') ? 'new' : 'seen';
            saveTechnicalAlerts();
            renderAlertsList();
        } else if (action === 'create-report') {
            const alertData = allTechnicalAlerts[alertId];
            if (alertData) {
                showMaintenancePage({ equipmentName: alertData.equipo, reportedIncidence: alertData.inconveniente });
            } else {
                displayMessage('No se encontró la data de la alerta.', 'error');
            }
        } else if (action === 'link-report') {
            const inputElement = alertItem.querySelector('.link-report-id-input');
            const reportIdToLink = inputElement.value.trim().toUpperCase();
            if (!reportIdToLink) {
                if (allTechnicalAlerts[alertId].linkedReportId) {
                    delete allTechnicalAlerts[alertId].linkedReportId;
                    saveTechnicalAlerts();
                    displayMessage('Vínculo eliminado.', 'info');
                    inputElement.value = '';
                }
                return;
            }
            if (allMaintenanceReports[reportIdToLink]) {
                allTechnicalAlerts[alertId].linkedReportId = reportIdToLink;
                saveTechnicalAlerts();
                displayMessage(`Alerta vinculada al reporte ${reportIdToLink}.`, 'success');
            } else {
                displayMessage(`Error: El reporte "${reportIdToLink}" no fue encontrado.`, 'error');
            }
        }
    });

    alertsBtn.addEventListener('click', () => {
        renderAlertsList();
        alertsListModal.style.display = 'flex';
    });
    closeAlertsListModalBtn.addEventListener('click', () => alertsListModal.style.display = 'none');

    function resetAlertForm() {
        alertForm.reset();
        alertFechaHora.value = new Date().toLocaleString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        alertThumb.style.backgroundImage = '';
        alertPhoto.value = '';
    }
    closeAlertModalBtn.addEventListener('click', () => alertModal.style.display = 'none');
    cancelAlertBtn.addEventListener('click', () => alertModal.style.display = 'none');
    alertPhoto.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                alertThumb.style.backgroundImage = `url(${event.target.result})`;
            };
            reader.readAsDataURL(file);
        }
    });
    deleteAlertPhotoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showConfirm('¿Eliminar esta foto?', () => {
            alertThumb.style.backgroundImage = '';
            alertPhoto.value = '';
            displayMessage('Foto eliminada.', 'info');
        });
    });
    alertThumb.addEventListener('click', (e) => {
        if (e.target.id === 'deleteAlertPhotoBtn') return;
        const bgImage = alertThumb.style.backgroundImage;
        if (bgImage && bgImage !== 'none' && bgImage !== "") {
            photoPreviewImage.src = bgImage.slice(5, -2);
            photoPreviewModal.style.display = 'flex';
        } else {
            alertPhoto.click();
        }
    });
    alertForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const prioridad = alertPrioridad.value;
        const equipo = alertEquipo.value.trim();
        const inconveniente = alertInconveniente.value.trim();
        const user = loggedInUser || 'Desconocido';
        const archivo = alertPhoto.files[0];
        const fecha = alertFechaHora.value;
        if (!prioridad || !equipo || !inconveniente) {
            displayMessage("Por favor completa los campos obligatorios.", 'error');
            return;
        }
        const newAlertId = `alert-${Date.now()}`;
        allTechnicalAlerts[newAlertId] = { id: newAlertId, timestamp: new Date().toISOString(), user, prioridad, equipo, inconveniente, status: 'new' };
        saveTechnicalAlerts();
        displayMessage('Alerta guardada. Confirma para enviar.', 'info');
        const fotoTexto = archivo ? `📷 Foto adjunta: ${archivo.name}` : 'Sin foto adjunta.';
        whatsappMessageFinal = `🚨 *ALERTA DE EQUIPO* 🚨\n\n📅 Fecha: ${fecha}\n🔧 Equipo: *${equipo}*\n⚠️ Prioridad: *${prioridad}*\n📝 Inconveniente: ${inconveniente}\n\n${fotoTexto}`;
        whatsappResumen.textContent = whatsappMessageFinal;
        whatsappOverlay.style.display = 'block';
        whatsappConfirmModal.style.display = 'block';
    });

    // --- Funciones del Modal de Compras ---
    function generateAndDisplayNextCorrelative() {
        const dbKey = 'purchase_requests_db';
        const requests = JSON.parse(localStorage.getItem(dbKey)) || [];
        let maxId = 0;
        requests.forEach(req => {
            if (req.id && req.id.startsWith('RC-')) {
                const numPart = parseInt(req.id.replace('RC-', ''), 10);
                if (!isNaN(numPart) && numPart > maxId) {
                    maxId = numPart;
                }
            }
        });
        const nextIdNumber = maxId + 1;
        const nextCorrelative = `RC-${String(nextIdNumber).padStart(3, '0')}`;
        
        document.getElementById('nro-correlativo-compra').textContent = `Nº: ${nextCorrelative}`;
        currentPurchaseRequestId = nextCorrelative;
    }

    function sendPurchaseToControl() {
        const solicitante = document.getElementById('solicitante-compra').value.trim();
        if (!solicitante) {
            displayMessage('El campo "Solicitante" es obligatorio para enviar.', 'error');
            return;
        }

        const items = [];
        const itemRows = document.querySelectorAll('#tablaItemsCompra tbody tr');
        itemRows.forEach(row => {
            const cantidad = row.querySelector('[name="cantidad"]').value;
            const especificacion = row.querySelector('[name="especificacion"]').value.trim();
            if (cantidad && especificacion) {
                items.push({
                    cantidad: cantidad,
                    unidad: row.querySelector('[name="unidad"]').value.trim(),
                    especificacion: especificacion,
                    equipo_uso: row.querySelector('[name="equipo_uso"]').value.trim(),
                    marca: row.querySelector('[name="marca"]').value.trim(),
                    modelo: row.querySelector('[name="modelo"]').value.trim(),
                });
            }
        });

        if (items.length === 0) {
            displayMessage('Debe añadir al menos un ítem con cantidad y especificación.', 'error');
            return;
        }
        
        const now = new Date();
        const newId = currentPurchaseRequestId;

        const newRequest = {
            id: newId,
            fecha: now.toISOString(),
            solicitante: solicitante,
            prioridad: document.getElementById('prioridad-compra').value,
            estado: 'ENVIADO',
            items: items,
            recibidoAt: null,
            aceptadoAt: null,
            eventos: [
                { t: now.toISOString(), e: 'Requerimiento Creado y Enviado' }
            ]
        };

        const dbKey = 'purchase_requests_db';
        let requests = JSON.parse(localStorage.getItem(dbKey)) || [];
        requests.push(newRequest);
        localStorage.setItem(dbKey, JSON.stringify(requests));

        displayMessage(`Requerimiento ${newId} enviado a control.`, 'success');
        purchaseRequestModal.style.display = 'none';

        showConfirm('¿Deseas ir al panel de Control de Compra ahora?', () => {
             controlCompraBtn.click();
        });
    }

    function generatePurchaseRequestPdf() {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');
            const margin = 15;
            const pageWidth = doc.internal.pageSize.getWidth();
            let currentY = 20;
            const nroCorrelativo = document.getElementById('nro-correlativo-compra').textContent.trim();
            const solicitante = document.getElementById('solicitante-compra').value || 'N/A';
            const empresa = document.getElementById('empresa-compra').value || 'N/A';
            const area = document.getElementById('area-compra').value || 'N/A';
            const centroCosto = document.getElementById('centro_costo-compra').value || 'N/A';
            const prioridad = document.getElementById('prioridad-compra').value || 'N/A';
            const destinatario = document.getElementById('destinatario-compra').value || 'N/A';
            const fechaSolicitud = document.getElementById('fecha_solicitud-compra').value || 'N/A';
            const fechaEntrega = document.getElementById('fecha_entrega-compra').value || 'N/A';
            const observaciones = document.getElementById('observaciones-compra').value || 'N/A';
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text('REQUERIMIENTO DE COMPRA', pageWidth / 2, currentY, { align: 'center' });
            currentY += 6;
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.text(nroCorrelativo, pageWidth - margin, currentY, { align: 'right' });
            currentY += 10;
            const generalData = [
                ['Solicitante:', solicitante, 'Prioridad:', prioridad],
                ['Empresa:', empresa, 'Destinatario:', destinatario],
                ['Área:', area, 'Fecha Solicitud:', fechaSolicitud],
                ['Centro de Costo:', centroCosto, 'Fecha Requerida:', fechaEntrega]
            ];
            doc.autoTable({ startY: currentY, body: generalData, theme: 'plain', styles: { fontSize: 10 }, columnStyles: { 0: { fontStyle: 'bold', cellWidth: 35 }, 1: { cellWidth: 60 }, 2: { fontStyle: 'bold', cellWidth: 35 }, 3: { cellWidth: 'auto' } } });
            currentY = doc.lastAutoTable.finalY + 10;
            const itemsTable = document.getElementById('tablaItemsCompra');
            const head = [['Item', 'Cant.', 'Und.', 'Especificación', 'Equipo/Área', 'Marca Sug.', 'Modelo/Parte']];
            const body = [];
            const rows = itemsTable.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const rowData = [row.cells[0].textContent, row.querySelector('[name="cantidad"]').value, row.querySelector('[name="unidad"]').value, row.querySelector('[name="especificacion"]').value, row.querySelector('[name="equipo_uso"]').value, row.querySelector('[name="marca"]').value, row.querySelector('[name="modelo"]').value];
                body.push(rowData);
            });
            doc.autoTable({ startY: currentY, head, body, theme: 'grid', headStyles: { fillColor: [22, 160, 133], textColor: 255 }, styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { halign: 'center', cellWidth: 10 }, 1: { halign: 'center', cellWidth: 12 }, 2: { halign: 'center', cellWidth: 18 }, 3: { cellWidth: 54 }, } });
            currentY = doc.lastAutoTable.finalY + 10;
            doc.autoTable({ startY: currentY, head: [['OBSERVACIONES / JUSTIFICACIÓN']], body: [[observaciones]], theme: 'grid', headStyles: { fillColor: [44, 62, 80], textColor: 255 }, styles: { fontSize: 9, minCellHeight: 5 } });
            currentY = doc.lastAutoTable.finalY + 15;
            const firmaSolicitanteImg = !purchaseSignaturePads.firmaSolicitanteCompra.isEmpty() ? purchaseSignaturePads.firmaSolicitanteCompra.toDataURL('image/png') : null;
            const firmaJefeImg = !purchaseSignaturePads.firmaJefeCompra.isEmpty() ? purchaseSignaturePads.firmaJefeCompra.toDataURL('image/png') : null;
            const firmaEntregaImg = !purchaseSignaturePads.firmaEntregaCompra.isEmpty() ? purchaseSignaturePads.firmaEntregaCompra.toDataURL('image/png') : null;
            const signatureWidth = 50;
            const signatureHeight = 25;
            const signatureY = currentY + 8;
            const signatureGap = (pageWidth - (margin * 2) - (signatureWidth * 3)) / 2;
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            let xPos = margin;
            doc.text('FIRMA SOLICITANTE', xPos + signatureWidth / 2, currentY, { align: 'center' });
            if (firmaSolicitanteImg) doc.addImage(firmaSolicitanteImg, 'PNG', xPos, signatureY, signatureWidth, signatureHeight);
            doc.line(xPos, signatureY + signatureHeight, xPos + signatureWidth, signatureY + signatureHeight);
            xPos += signatureWidth + signatureGap;
            doc.text('V°B° JEFE DE ÁREA', xPos + signatureWidth / 2, currentY, { align: 'center' });
            if (firmaJefeImg) doc.addImage(firmaJefeImg, 'PNG', xPos, signatureY, signatureWidth, signatureHeight);
            doc.line(xPos, signatureY + signatureHeight, xPos + signatureWidth, signatureY + signatureHeight);
            xPos += signatureWidth + signatureGap;
            doc.text('CONFORMIDAD DE ENTREGA', xPos + signatureWidth / 2, currentY, { align: 'center' });
            if (firmaEntregaImg) doc.addImage(firmaEntregaImg, 'PNG', xPos, signatureY, signatureWidth, signatureHeight);
            doc.line(xPos, signatureY + signatureHeight, xPos + signatureWidth, signatureY + signatureHeight);
            doc.save(`Requerimiento_${nroCorrelativo.replace('N°: ', '')}.pdf`);
            displayMessage('PDF generado.', 'success');
        } catch (error) {
            console.error("Error al generar PDF de compra:", error);
            displayMessage('Error al generar el PDF.', 'error');
        }
    }

    function resizePurchaseCanvases() {
        ['firmaSolicitanteCompra', 'firmaJefeCompra', 'firmaEntregaCompra'].forEach(id => {
            const canvas = document.getElementById(id);
            if (canvas && purchaseSignaturePads[id]) {
                const signaturePad = purchaseSignaturePads[id];
                const data = signaturePad.toData();
                const ratio = Math.max(window.devicePixelRatio || 1, 1);
                canvas.width = canvas.offsetWidth * ratio;
                canvas.height = canvas.offsetHeight * ratio;
                canvas.getContext("2d").scale(ratio, ratio);
                signaturePad.clear();
                if (data) {
                    signaturePad.fromData(data);
                }
            }
        });
    }

    function initializePurchaseSignatures() {
        const signatureIds = ['firmaSolicitanteCompra', 'firmaJefeCompra', 'firmaEntregaCompra'];
        signatureIds.forEach(id => {
            const canvas = document.getElementById(id);
            if (canvas && !purchaseSignaturePads[id]) {
                purchaseSignaturePads[id] = new SignaturePad(canvas, {
                    backgroundColor: 'rgb(249, 250, 251)'
                });
            }
        });
        resizePurchaseCanvases();
    }

    function resetPurchaseForm() {
        document.getElementById('solicitante-compra').value = '';
        document.getElementById('empresa-compra').value = '';
        document.getElementById('area-compra').value = '';
        document.getElementById('destinatario-compra').value = '';
        document.getElementById('fecha_solicitud-compra').valueAsDate = new Date();
        document.getElementById('fecha_entrega-compra').value = '';
        document.getElementById('observaciones-compra').value = '';
        const prioridadSelect = document.getElementById('prioridad-compra');
        prioridadSelect.value = 'Alta';
        actualizarColorPrioridadCompra();
        const tablaBody = document.getElementById('tablaItemsCompra').querySelector('tbody');
        while (tablaBody.rows.length > 1) {
            tablaBody.deleteRow(1);
        }
        tablaBody.rows[0].querySelectorAll('input, textarea').forEach(input => input.value = '');
        Object.values(purchaseSignaturePads).forEach(pad => pad.clear());
    }

    window.actualizarColorPrioridadCompra = () => {
        const select = document.getElementById('prioridad-compra');
        select.className = 'w-full p-2 border border-gray-300 rounded-md shadow-sm font-bold';
        select.classList.add(select.value.toLowerCase());
    }
    window.agregarFilaCompra = () => {
        const tabla = document.getElementById("tablaItemsCompra").querySelector("tbody");
        const nuevaFila = tabla.rows[0].cloneNode(true);
        const nuevoIndex = tabla.rows.length + 1;
        nuevaFila.cells[0].innerText = nuevoIndex;
        nuevaFila.querySelectorAll("input, textarea").forEach(e => e.value = "");
        tabla.appendChild(nuevaFila);
    }
    window.eliminarFilaCompra = (btn) => {
        const fila = btn.closest('tr');
        const tbody = fila.parentNode;
        if (tbody.rows.length > 1) {
            tbody.removeChild(fila);
            for (let i = 0; i < tbody.rows.length; i++) {
                tbody.rows[i].cells[0].innerText = i + 1;
            }
        }
    }
    window.limpiarCanvas = (id) => {
        if (purchaseSignaturePads[id]) {
            purchaseSignaturePads[id].clear();
        }
    }

    sendPurchaseToControlBtn.addEventListener('click', sendPurchaseToControl);
    
    comprasBtn.addEventListener('click', () => {
        purchaseRequestModal.style.display = 'flex';
        resetPurchaseForm();
        initializePurchaseSignatures();
        generateAndDisplayNextCorrelative();
    });
    closePurchaseRequestModalBtn.addEventListener('click', () => {
        purchaseRequestModal.style.display = 'none';
    });
    exportPurchasePdfBtn.addEventListener('click', generatePurchaseRequestPdf);
    window.addEventListener('resize', resizePurchaseCanvases);

    // --- Lógica Adicional y de Arranque ---
    if (localStorage.getItem('loggedInUser')) {
        loggedInUser = localStorage.getItem('loggedInUser');
        authPage.style.display = 'none';
        mainDashboardPage.style.display = 'flex';
        loadAllData();
        updateDashboardAccess();
        const titulo = document.getElementById('titulo-animado');
        const textoCompleto = "MENÚ DE CORPORACION PERUANA DE SUMINISTROS LOGISTICOS SAC";
        startTypingAnimation(titulo, textoCompleto, 70);
    } else {
        authPage.style.display = 'flex';
    }

    searchBar.addEventListener('input', (e) => renderEmployeeList(e.target.value.trim()));
    viewChecklistSummaryPdfBtn.addEventListener('click', () => generateChecklistSummaryPdf('view'));
    downloadChecklistSummaryPdfBtn.addEventListener('click', () => generateChecklistSummaryPdf('download'));

    function setupPhotoBlock(inputElement, thumbElement) {
        inputElement.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    thumbElement.style.backgroundImage = `url(${event.target.result})`;
                };
                reader.readAsDataURL(file);
            }
        });
        thumbElement.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-photo-btn')) return;
            const bgImage = thumbElement.style.backgroundImage;
            if (bgImage && bgImage !== 'none' && bgImage !== "") {
                photoPreviewImage.src = bgImage.slice(5, -2);
                photoPreviewModal.style.display = 'flex';
            } else {
                inputElement.click();
            }
        });
    }
    setupPhotoBlock(photoInput1, thumb1);
    setupPhotoBlock(photoInput2, thumb2);
    setupPhotoBlock(photoInput3, thumb3);

    photoUploadContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-photo-btn')) {
            e.stopPropagation();
            const photoIndex = e.target.dataset.photoIndex;
            showConfirm('¿Eliminar esta foto?', () => {
                const thumb = document.getElementById(`thumb${photoIndex}`);
                const input = document.getElementById(`photo${photoIndex}`);
                const titleInput = document.getElementById(`photoTitle${photoIndex}`);
                thumb.style.backgroundImage = '';
                input.value = '';
                titleInput.value = '';
                if (currentReportId && allMaintenanceReports[currentReportId]) {
                    allMaintenanceReports[currentReportId][`photo${photoIndex}`] = null;
                    allMaintenanceReports[currentReportId][`photoTitle${photoIndex}`] = null;
                    saveAllMaintenanceReports();
                    addReportHistoryEntry(currentReportId, `Foto ${photoIndex} eliminada`, loggedInUser);
                    displayMessage(`Foto ${photoIndex} eliminada.`, 'success');
                } else {
                    displayMessage(`Foto ${photoIndex} eliminada.`, 'info');
                }
            });
        }
    });
    closePhotoPreviewBtn.addEventListener('click', () => {
        photoPreviewModal.style.display = 'none';
        photoPreviewImage.src = '';
    });

    // --- Funciones del Dashboard de Ayuda y Gráficos ---
    function showMaintenanceDashboard() {
        const reports = Object.values(allMaintenanceReports);
        const totalReports = reports.length;
        const statusCounts = reports.reduce((acc, report) => {
            const status = report.status || 'SIN ESTATUS';
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});
        const finalizados = statusCounts['FINALIZADO'] || 0;
        const pendientes = statusCounts['PENDIENTE'] || 0;
        const enProceso = statusCounts['PROCESO'] || 0;
        let totalAttentionDays = 0;
        let reportsWithDates = 0;
        reports.forEach(r => {
            if (r.status === 'FINALIZADO' && r.incidenceDate && r.deliveryDate) {
                const start = new Date(r.incidenceDate);
                const end = new Date(r.deliveryDate);
                if (!isNaN(start) && !isNaN(end)) {
                    totalAttentionDays += (end - start) / (1000 * 60 * 60 * 24);
                    reportsWithDates++;
                }
            }
        });
        const avgAttentionTime = reportsWithDates > 0 ? (totalAttentionDays / reportsWithDates).toFixed(2) : 'N/A';
        helpDashboardContent.innerHTML = `<header><h1>Dashboard de Mantenimiento</h1></header><main><div class="kpi-panel"><div><strong>Total Reportes:</strong> ${totalReports}</div><div><strong>Finalizados:</strong> ${finalizados}</div><div><strong>Pendientes:</strong> ${pendientes}</div><div><strong>En Proceso:</strong> ${enProceso}</div><div><strong>Tpo. Prom. Atención:</strong> ${avgAttentionTime} días</div></div><div class="chart-container"><div id="chart-status"></div></div><div class="chart-container"><div id="chart-top-equipment"></div></div><div class="chart-container"><div id="chart-top-technicians"></div></div><div class="chart-container"><div id="chart-type"></div></div><div class="chart-container"><div id="chart-trend"></div></div><div class="chart-container"><div id="chart-attention-dist"></div></div></main>`;
        createStatusChart(reports);
        createTopItemsChart(reports, 'equipmentName', 'chart-top-equipment', 'Top 10 Equipos con más Reportes', 'Equipo');
        createTopItemsChart(reports, 'responsibleTechnician', 'chart-top-technicians', 'Técnicos Más Activos', 'Técnico');
        createTypeChart(reports);
        createTrendChart(reports);
        createAttentionDistributionChart(reports);
        helpDashboardModal.style.display = 'flex';
    }

    function showHelpGlosario() {
        helpDashboardContent.innerHTML = `<header><h1>Glosario y KPIs</h1></header><main><div class="definitions-section" style="margin-top: 0; border: none; padding-top: 0;"><dl><dt>Preventivo</dt><dd>Mantenimiento antes de una falla (limpieza, ajustes).</dd><dt>Soporte</dt><dd>Asistencia directa para resolver problemas puntuales.</dd><dt>Correctivo</dt><dd>Mantenimiento después de una falla para restaurar la operación.</dd><dt>Predictivo</dt><dd>Monitorización para predecir y prevenir fallas.</dd><dt>Fabricación</dt><dd>Crear una pieza cuando no hay repuesto disponible.</dd><dt>MTTR</dt><dd>Tiempo Promedio para Reparar.</dd><dt>MTBF</dt><dd>Tiempo Promedio Entre Fallas (indicador de confiabilidad).</dd></dl></div></main>`;
        helpDashboardModal.style.display = 'flex';
    }
    dashboardBtn.addEventListener('click', showMaintenanceDashboard);
    helpBtn.addEventListener('click', showHelpGlosario);
    closeHelpDashboardModalBtn.addEventListener('click', () => {
        helpDashboardModal.style.display = 'none';
        helpDashboardContent.innerHTML = '';
    });

    function createStatusChart(reports) {
        const counts = reports.reduce((acc, r) => {
            const status = r.status || 'SIN ESTATUS';
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});
        const labels = Object.keys(counts);
        const values = Object.values(counts);
        const colorMap = {
            'FINALIZADO': '#4285F4',
            'EN PROCESO': '#DB4437',
            'PENDIENTE': '#9C27B0',
            'SIN ESTATUS': '#9E9E9E'
        };
        const barColors = labels.map(label => colorMap[label.toUpperCase()] || '#9E9E9E');
        const data = [{
            x: labels,
            y: values,
            text: values,
            textposition: 'auto',
            type: 'bar',
            marker: {
                color: barColors
            }
        }];
        const layout = {
            title: 'Estado de Reportes',
            yaxis: {
                title: 'Cantidad'
            }
        };
        Plotly.newPlot('chart-status', data, layout, {
            responsive: true
        });
    }

    function createTopItemsChart(reports, key, elementId, title, xAxisTitle) {
        const counts = reports.reduce((acc, r) => {
            const item = r[key] || 'No Asignado';
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});
        const sortedItems = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10);
        const data = [{
            x: sortedItems.map(item => item[0]),
            y: sortedItems.map(item => item[1]),
            text: sortedItems.map(item => item[1]),
            textposition: 'auto',
            type: 'bar'
        }];
        const layout = {
            title: title,
            yaxis: {
                title: 'Cantidad'
            },
            xaxis: {
                tickangle: -25
            }
        };
        Plotly.newPlot(elementId, data, layout, {
            responsive: true
        });
    }

    function createTypeChart(reports) {
        const counts = reports.reduce((acc, r) => {
            const type = r.maintenanceType || 'No Especificado';
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        const labels = Object.keys(counts);
        const values = Object.values(counts);
        const colorMap = {
            'PREVENTIVO': '#4285F4',
            'SOPORTE': '#DB4437',
            'CORRECTIVO': '#0F9D58',
            'PREVENTIVO PROGRAMADO': '#9C27B0',
            'FABRICACIÓN': '#FF8C00',
            'PREVENTIVO NO PROGRAMADO': '#4FC3F7',
            'INSTALACION EQUIPO NUEVO': '#E91E63',
            'PREDICTIVO': '#8BC34A',
            'PREVENTIVO-CORRECTIVO': '#F48FB1',
            'No Especificado': '#9E9E9E'
        };
        const pieColors = labels.map(label => colorMap[label] || '#9E9E9E');
        const data = [{
            labels: labels,
            values: values,
            type: 'pie',
            hole: .4,
            marker: {
                colors: pieColors
            }
        }];
        const layout = {
            title: 'Distribución por Tipo de Mantenimiento'
        };
        Plotly.newPlot('chart-type', data, layout, {
            responsive: true
        });
    }

    function createTrendChart(reports) {
        const counts = reports.reduce((acc, r) => {
            if (r.incidenceDate) {
                try {
                    const month = r.incidenceDate.substring(0, 7); // YYYY-MM
                    acc[month] = (acc[month] || 0) + 1;
                } catch (e) {}
            }
            return acc;
        }, {});
        const sortedMonths = Object.entries(counts).sort((a, b) => a[0].localeCompare(b[0]));
        const data = [{
            x: sortedMonths.map(item => item[0]),
            y: sortedMonths.map(item => item[1]),
            type: 'scatter',
            mode: 'lines+markers'
        }];
        const layout = {
            title: 'Tendencia Mensual de Reportes',
            xaxis: {
                title: 'Mes'
            },
            yaxis: {
                title: 'Cantidad'
            }
        };
        Plotly.newPlot('chart-trend', data, layout, {
            responsive: true
        });
    }

    function createAttentionDistributionChart(reports) {
        const attentionTimes = reports.map(r => {
            if (r.status === 'FINALIZADO' && r.incidenceDate && r.deliveryDate) {
                const start = new Date(r.incidenceDate);
                const end = new Date(r.deliveryDate);
                if (!isNaN(start) && !isNaN(end)) {
                    return (end - start) / (1000 * 60 * 60 * 24);
                }
            }
            return null;
        }).filter(days => days !== null && days >= 0);
        const data = [{
            x: attentionTimes,
            type: 'histogram',
            xbins: {
                size: 1
            }
        }];
        const layout = {
            title: 'Distribución del Tiempo de Atención (días)',
            xaxis: {
                title: 'Días para completar'
            },
            yaxis: {
                title: 'Nº de Reportes'
            }
        };
        Plotly.newPlot('chart-attention-dist', data, layout, {
            responsive: true
        });
    }

    function startTypingAnimation(element, text, speed) {
        if (!element) return;
        let i = 0;
        let isErasing = false;
        const typeWriter = () => {
            element.style.animation = 'blink-cursor 1s step-end infinite';
            if (isErasing) {
                if (i > 0) {
                    element.innerHTML = text.substring(0, i - 1);
                    i--;
                    setTimeout(typeWriter, speed / 2);
                } else {
                    isErasing = false;
                    setTimeout(typeWriter, 500);
                }
            } else {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    isErasing = true;
                    setTimeout(typeWriter, 2000);
                }
            }
        };
        typeWriter();
    }

    // ===================================================================
    // INICIO: LÓGICA PARA EL MODAL DE CONTROL DE COMPRA
    // ===================================================================
    function initializeControlCompraModal() {
        const container = document.getElementById('controlCompraContentContainer');
        const CONF = { apiList: '', apiUpdate: '', apiKey: '' };
        const State = { data: [], filtered: [], selected: null };

        const fmtDateTime = (iso) => {
            if (!iso) return '';
            const d = new Date(iso);
            const pad = (n) => String(n).padStart(2, '0');
            return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
        };

        const statusChip = (s) => {
            switch ((s || '').toUpperCase()) {
                case 'ENVIADO': return '<span class="chip chip-enviado">ENVIADO</span>';
                case 'RECIBIDO': return '<span class="chip chip-recibido">RECIBIDO</span>';
                case 'ACEPTADO': return '<span class="chip chip-aceptado">ACEPTADO</span>';
                case 'OBSERVADO': return '<span class="chip chip-observado">OBSERVADO</span>';
                default: return '<span class="chip chip-borrador">BORRADOR</span>';
            }
        };

        window.openSettings = () => { container.querySelector('#cfgModal').classList.add('open'); loadSettings(); };
        window.closeSettings = () => { container.querySelector('#cfgModal').classList.remove('open'); };
        
        window.saveSettings = () => {
            CONF.apiList = container.querySelector('#cfgList').value.trim();
            CONF.apiUpdate = container.querySelector('#cfgUpdate').value.trim();
            CONF.apiKey = container.querySelector('#cfgKey').value.trim();
            localStorage.setItem('rc_conf', JSON.stringify(CONF));
            alert('Guardado.');
        };

        const loadSettings = () => {
            const raw = localStorage.getItem('rc_conf');
            if (raw) {
                const obj = JSON.parse(raw);
                CONF.apiList = obj.apiList || '';
                CONF.apiUpdate = obj.apiUpdate || '';
                CONF.apiKey = obj.apiKey || '';
            }
            container.querySelector('#cfgList').value = CONF.apiList;
            container.querySelector('#cfgUpdate').value = CONF.apiUpdate;
            container.querySelector('#cfgKey').value = CONF.apiKey;
        };
        
        window.clearSettings = () => { localStorage.removeItem('rc_conf'); loadSettings(); };

        async function fetchList() {
            loadSettings();
            if (CONF.apiList) {
                const headers = CONF.apiKey ? { 'Authorization': CONF.apiKey } : {};
                const res = await fetch(CONF.apiList, { headers });
                State.data = await res.json();
            } else {
                const dbKey = 'purchase_requests_db';
                const localData = localStorage.getItem(dbKey);
                if (localData) {
                    State.data = JSON.parse(localData);
                } else {
                    State.data = []; 
                    localStorage.setItem(dbKey, JSON.stringify(State.data));
                }
            }
        }

        const applyFilters = () => {
            const q = (container.querySelector('#fTexto').value||'').toLowerCase();
            const est = (container.querySelector('#fEstado').value||'').toUpperCase();
            const prio = container.querySelector('#fPrioridad').value;
            const d1 = container.querySelector('#fDesde').value;
            const d2 = container.querySelector('#fHasta').value;
            State.filtered = State.data.filter(row=>{
                const hay = (txt)=> (txt||'').toString().toLowerCase().includes(q);
                const fechaOk = (!d1 && !d2) || (new Date(row.fecha) >= new Date(d1||'1970-01-01') && new Date(row.fecha) <= new Date((d2||'2999-12-31')+'T23:59:59'));
                const estOk = !est || (row.estado||'').toUpperCase() === est;
                const prOk = !prio || (row.prioridad === prio);
                const txtOk = hay(row.id) || hay(row.solicitante) || (row.items||[]).some(it=> hay(it.especificacion)||hay(it.equipo_uso));
                return fechaOk && estOk && prOk && (q?txtOk:true);
            });
        };

        const renderKPIs = () => {
            container.querySelector('#kpiTotal').textContent = State.filtered.length;
            container.querySelector('#kpiEnviados').textContent = State.filtered.filter(r=> r.estado==='ENVIADO').length;
            container.querySelector('#kpiRecibidos').textContent = State.filtered.filter(r=> r.estado==='RECIBIDO').length;
            container.querySelector('#kpiAceptados').textContent = State.filtered.filter(r=> r.estado==='ACEPTADO').length;
        };

        const renderKanban = () => {
            const cols = {
                ENVIADO: container.querySelector('#colEnviado'),
                RECIBIDO: container.querySelector('#colRecibido'),
                ACEPTADO: container.querySelector('#colAceptado'),
                OBSERVADO: container.querySelector('#colObservado'),
            };
            Object.values(cols).forEach(c=> c.innerHTML = '');
            ['ENVIADO','RECIBIDO','ACEPTADO','OBSERVADO'].forEach(s=>{
                State.filtered.filter(r=> (r.estado||'').toUpperCase()===s).forEach(r=>{
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `<div class="flex justify-between items-start gap-2"><div><div class="text-sm font-bold text-gray-800">${r.id}</div><div class="text-xs text-gray-500">${fmtDateTime(r.fecha)}</div></div><div>${statusChip(r.estado)}</div></div><div class="mt-2 text-sm text-gray-700"><span class="tag">${r.prioridad||''}</span> — ${r.solicitante||''}</div><ul class="mt-2 text-xs text-gray-600 list-disc ml-4">${(r.items||[]).slice(0,2).map(it=> `<li>${(it.especificacion||'').slice(0,60)}</li>`).join('')}${((r.items||[]).length>2)? `<li>… ${r.items.length-2} más</li>`:''}</ul>`;
                    card.addEventListener('dblclick', ()=> openRow(r.id));
                    cols[s].appendChild(card);
                });
            });
        };

        const renderTable = () => {
            const tbody = container.querySelector('#gridBody');
            tbody.innerHTML = '';
            State.filtered.forEach(r=>{
                const tr = document.createElement('tr');
                tr.className = 'border-b hover:bg-gray-50 cursor-pointer';
                tr.innerHTML = `<td class="p-2 text-sm font-mono">${r.id}</td><td class="p-2 text-sm">${fmtDateTime(r.fecha)}</td><td class="p-2 text-sm">${r.solicitante||''}</td><td class="p-2 text-sm">${r.prioridad||''}</td><td class="p-2 text-sm">${statusChip(r.estado)}</td><td class="p-2 text-sm">${(r.items||[]).length}</td><td class="p-2 text-sm">${fmtDateTime(r.aceptadoAt||r.recibidoAt)}</td>`;
                tr.addEventListener('dblclick', ()=> openRow(r.id));
                tbody.appendChild(tr);
            });
        };

        const renderAll = () => { applyFilters(); renderKPIs(); renderKanban(); renderTable(); };
        
        window.syncNow = async () => {
            ['colEnviado','colRecibido','colAceptado','colObservado'].forEach(id=>{
                container.querySelector(`#${id}`).innerHTML = '<div class="skeleton"></div><div class="skeleton"></div>';
            });
            await fetchList();
            renderAll();
        };

        window.clearFilters = () => {
            container.querySelector('#fEstado').value=''; container.querySelector('#fPrioridad').value=''; container.querySelector('#fTexto').value=''; container.querySelector('#fDesde').value=''; container.querySelector('#fHasta').value='';
            renderAll();
        };

        const openRow = (id) => {
            const r = State.data.find(x=> x.id===id);
            State.selected = r || null;
            if (!r) return;
            container.querySelector('#modalTitle').textContent = `Detalle — ${r.id}`;
            const itemsHtml = (r.items||[]).map((it,i)=>`<tr><td class="p-1 text-xs">${i+1}</td><td class="p-1 text-xs">${it.cantidad||''}</td><td class="p-1 text-xs">${it.unidad||''}</td><td class="p-1 text-xs">${it.especificacion||''}</td><td class="p-1 text-xs">${it.equipo_uso||''}</td><td class="p-1 text-xs">${it.marca||''}</td><td class="p-1 text-xs">${it.modelo||''}</td></tr>`).join('');
            const eventosHtml = (r.eventos||[]).map(ev=>`<li class="text-xs text-gray-700"><span class="font-mono">${fmtDateTime(ev.t)}</span> — ${ev.e}</li>`).join('');
            container.querySelector('#modalBody').innerHTML = `<div class="grid grid-cols-2 gap-3"><div><div class="text-sm"><strong>Fecha:</strong> ${fmtDateTime(r.fecha)}</div><div class="text-sm"><strong>Solicitante:</strong> ${r.solicitante||''}</div><div class="text-sm"><strong>Prioridad:</strong> ${r.prioridad||''}</div><div class="text-sm"><strong>Estado:</strong> ${statusChip(r.estado)}</div></div><div><div class="text-sm"><strong>Recibido:</strong> ${fmtDateTime(r.recibidoAt)}</div><div class="text-sm"><strong>Aceptado:</strong> ${fmtDateTime(r.aceptadoAt)}</div></div></div><div class="mt-3"><h4 class="font-bold text-gray-800">Ítems</h4><div class="overflow-auto border rounded"><table class="min-w-full"><thead class="bg-gray-100 text-xs text-gray-600"><tr><th class="p-1 text-left">#</th><th class="p-1 text-left">Cant</th><th class="p-1 text-left">Und</th><th class="p-1 text-left">Especificación</th><th class="p-1 text-left">Equipo/Área</th><th class="p-1 text-left">Marca</th><th class="p-1 text-left">Modelo</th></tr></thead><tbody>${itemsHtml}</tbody></table></div></div><div class="mt-3"><h4 class="font-bold text-gray-800">Historial</h4><ul class="list-disc ml-5">${eventosHtml}</ul></div>`;
            container.querySelector('#modal').classList.add('open');
        };
        window.closeModal = () => { container.querySelector('#modal').classList.remove('open'); State.selected=null; };

        window.markStatus = async (next) => {
            if (!State.selected) return;
            const id = State.selected.id;
            const dbKey = 'purchase_requests_db';
            let requests = JSON.parse(localStorage.getItem(dbKey)) || [];
            const reqIndex = requests.findIndex(x => x.id === id);

            if (reqIndex === -1) {
                alert('Error: No se encontró el requerimiento para actualizar.');
                return;
            }

            requests[reqIndex].estado = next;
            const now = new Date().toISOString();
            if (next === 'RECIBIDO') requests[reqIndex].recibidoAt = now;
            if (next === 'ACEPTADO') requests[reqIndex].aceptadoAt = now;
            
            requests[reqIndex].eventos = requests[reqIndex].eventos || [];
            requests[reqIndex].eventos.push({ t: now, e: `Estado cambiado a ${next}` });
            
            localStorage.setItem(dbKey, JSON.stringify(requests));
            State.data = requests;

            closeModal();
            renderAll();
        };

        window.exportCSV = () => {
            const rows = [['id','fecha','solicitante','prioridad','estado','items','recibidoAt','aceptadoAt']].concat(State.filtered.map(r=>[r.id, r.fecha, r.solicitante||'', r.prioridad||'', r.estado||'', (r.items||[]).length, r.recibidoAt||'', r.aceptadoAt||'']));
            const csv = rows.map(r=> r.map(v=> `"${String(v).replaceAll('"','""')}"`).join(',')).join('\n');
            const blob = new Blob([csv], {type:'text/csv'});
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'control_compras.csv';
            a.click();
            URL.revokeObjectURL(a.href);
        };

        ['fEstado','fPrioridad','fTexto','fDesde','fHasta'].forEach(id=>{
            container.querySelector(`#${id}`).addEventListener('input', renderAll);
        });

        (async function init(){
            await syncNow();
        })();
    }

    controlCompraBtn.addEventListener('click', () => {
        controlCompraModal.style.display = 'flex';
        if (!isControlCompraInitialized) {
            initializeControlCompraModal();
            isControlCompraInitialized = true;
        } else {
            window.syncNow();
        }
    });

    closeControlCompraModalBtn.addEventListener('click', () => {
        controlCompraModal.style.display = 'none';
    });
});