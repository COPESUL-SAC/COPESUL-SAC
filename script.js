document.addEventListener('DOMContentLoaded', () => {
    // --- Authentication Elements ---
    const authPage = document.getElementById('authPage');
    const authForm = document.getElementById('authForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const authMessage = document.getElementById('authMessage');
    const authTitle = document.getElementById('authTitle');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const toggleAuthMode = document.getElementById('toggleAuthMode');

    // --- Main Dashboard Elements ---
    const mainDashboardPage = document.getElementById('mainDashboardPage');
    const goToMaintenanceOption = document.getElementById('goToMaintenanceOption');
    const goToChecklistOption = document.getElementById('goToChecklistOption');
    const logoutBtnMain = document.getElementById('logoutBtnMain');
    // --- App Elements (Employee Checklist) ---
    const appPage = document.getElementById('appPage');
    const logoutBtn = document.getElementById('logoutBtn');
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    const viewChecklistSummaryPdfBtn = document.getElementById('viewChecklistSummaryPdfBtn'); // <-- Nuevo Botón
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

    // --- Maintenance Elements ---
    const maintenancePage = document.getElementById('maintenancePage');
    const newReportBtn = document.getElementById('newReportBtn');
    const logoutBtnMaintenance = document.getElementById('logoutBtnMaintenance');
    const openSearchModalBtn = document.getElementById('openSearchModalBtn');
    const downloadExcelBtn = document.getElementById('downloadExcelBtn');
    const maintenanceForm = document.getElementById('maintenanceForm');
    const reportIdInput = document.getElementById('reportId');
    const statusSelect = document.getElementById('status');
    const incidenceDateInput = document.getElementById('incidenceDate');
    const attentionDateInput = document.getElementById('attentionDate');
    const deliveryDateInput = document.getElementById('deliveryDate');
    const horaInicioInput = document.getElementById('horaInicio');
    const horaFinalizadaInput = document.getElementById('horaFinalizada');
    const equipmentNameSelect = document.getElementById('equipmentName');
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
    const maintenanceReportListBody = document.getElementById('maintenanceReportListBody');
    const backToMainFromMaintenanceBtn = document.getElementById('backToMainFromMaintenanceBtn');
    const reportHistoryUl = document.getElementById('reportHistoryUl');

    // --- Chart Canvas ---
    const chartCanvas = document.getElementById('chartCanvas');
    let currentChart = null;

    // --- INICIO: Elementos de Firma Digital ---
    const signatureCanvas = document.getElementById('signature-canvas');
    const clearSignatureBtn = document.getElementById('clearSignatureBtn');
    let signaturePad;
    // --- FIN: Elementos de Firma Digital ---

    // --- Search Modal Elements ---
    const searchModal = document.getElementById('searchModal');
    const searchForm = document.getElementById('searchForm');
    const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
    const applySearchBtn = document.getElementById('applySearchBtn');
    const resetSearchBtn = document.getElementById('resetSearchBtn');
    const searchStartDate = document.getElementById('searchStartDate');
    const searchEndDate = document.getElementById('searchEndDate');
    const searchStatus = document.getElementById('searchStatus');
    const searchEquipmentName = document.getElementById('searchEquipmentName');
    const searchMaintenanceType = document.getElementById('searchMaintenanceType');

    // --- Global Variables ---
    let users = JSON.parse(localStorage.getItem('users')) || {};
    let loggedInUser = null;
    let isRegisterMode = false;
    let allEmployees = {};
    let currentEmployeeId = null;
    let editingEmployeeId = null;
    let allMaintenanceReports = {};
    let currentReportId = null;
    let currentMaintenanceFilters = {};

    const checklistItems = [
        { id: 'dni', name: 'DNI' }, { id: 'antecedentes_policiales', name: 'Antecedentes Policiales' },
        { id: 'antecedentes_penales', name: 'Antecedentes Penales' }, { id: 'antecedentes_judiciales', name: 'Antecedentes Judiciales' },
        { id: 'curriculum_vitae', name: 'Curriculum Vitae' }, { id: 'declaracion_jurada_domicilio', name: 'Declaración Jurada de Domicilio' },
        { id: 'recibo_servicios', name: 'Recibo de Servicios (agua, luz, teléfono)' }, { id: 'contrato_trabajo', name: 'Contrato de Trabajo' },
        { id: 'boleta_pago', name: 'Boleta de Pago' }, { id: 'seguro_sctr', name: 'Seguro SCTR' },
        { id: 'examenes_medicos', name: 'Exámenes Médicos' }, { id: 'constancia_trabajo_anterior', name: 'Constancia de Trabajo Anterior' },
        { id: 'certificado_estudios', name: 'Certificado de Estudios' }, { id: 'licencia_conducir', name: 'Licencia de Conducir (si aplica)' },
        { id: 'record_conductor', name: 'Record de Conductor (si aplica)' }, { id: 'declaracion_jurada_salud', name: 'Declaración Jurada de Salud' },
        { id: 'formato_cargos', name: 'Formato de Cargos' }, { id: 'ficha_datos_personales', name: 'Ficha de Datos Personales' },
        { id: 'certificado_capacitacion', name: 'Certificado de Capacitación' }, { id: 'reglamento_interno', name: 'Reglamento Interno de Trabajo' }
    ];
    
    const STATUS_OPTIONS = ['FINALIZADO', 'PENDIENTE', 'PROCESO'];
    const EQUIPMENT_OPTIONS = [
        'EQUIPOS PERIFERICOS', 'SELLADORA LATERAL N1', 'SELLADORA LATERAL N2', 'SELLADORA LATERAL N3', 'SELLADORA LATERAL N4',
        'SELLADORA FONDO CORTE CALIENTE N5', 'SELLADORA PARCHE N6', 'SELLADORA LATERAL N7', 'SELLADORA SELLO FONDO CORTE FRIO N8', 'SELLADORA HECE N9',
        'DOBLADOR N1', 'DOBLADOR N2', 'ALINEADOR NEUMATICO N1', 'ALINEADOR NEUMATICO N2', 'ALINEADOR NEUMATICO N3', 'ALINEADOR MECANICO N4', 'ALINEADOR MECANICO N5',
        'COMPRESOR DE TORNILLO N1', 'COMPRESOR DE TORNILLO N2', 'COMPRESOR PISTON N1', 'COMPRESOR PISTON N2', 'COMPRESOR PISTON N3', 'CORTADORA DE TUCOS N1',
        'IMPRESORA 6 COLORES', 'IMPRESORA 4 COLORES', 'MONTADORA DE CLISSES', 'REFILADORA N1', 'REFILADORA N2', 'EXTRUSORA N1', 'EXTRUSORA N2', 'EXTRUSORA N3',
        'MOLINO', 'MEZCLADOR', 'GAVIMETRICO', 'ESTACION DE TRATADO N1', 'ESTACION DE TRATADO N2', 'ESTACION DE TRATADO N3', 'ESTACION DE TRATADO N4',
        'CORTADORA DE TUCOS N2', 'ALINEADOR MECANICO HECE N6', 'ALINEADOR MECANICO N7', 'ALINEADOR MECANICO N8', 'TROQUEL PRENSA EXCENTRICA ASA',
        'TROQUEL TUBULAR VERTICAL NACIONAL', 'TROQUEL TUBULAR VERTICAL CHALLENGE', 'SECADOR DE AIRE N1', 'SECADOR DE AIRE N2', 'TRATADORA N1',
        'TRATADORA N2', 'TRATADORA N3', 'TRATADORA N4', 'TANQUE PULMON H1', 'TANQUE PULMON H2', 'SELLADORA MANUAL', 'CHILLER', 'LAMINADORA',
        'GUILLOTINA', 'ESTACION DE TRATADO N5', 'ESTacion DE TRATADO N6', 'ESTACION DE TRATADO N7', 'TRATADORA N5', 'TRATADORA N6', 'TRATADORA N7'
    ];
    const MAINTENANCE_TYPE_OPTIONS = [ 'PREVENTIVO', 'CORRECTIVO', 'PREDICTIVO', 'PREVENTIVO-CORRECTIVO', 'FABRICACION', 'SOPORTE', 'PREVENTIVO PROGRAMADO', 'PREVENTIVO NO PROGRAMADO', 'INSTALACION EQUIPO NUEVO' ];
    const TECHNICIAN_OPTIONS = ['FRANCISCO VERA', 'RAFAEL ROJAS', 'NILTON DE LA CRUZ', 'TECNICO EXTERNO'];

    // --- Authentication Functions ---
    function saveUsers() {
        localStorage.setItem('users', JSON.stringify(users));
    }

    function hashPassword(password) {
        return btoa(password);
    }

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value.trim();
        const hashedPassword = hashPassword(password);

        if (isRegisterMode) {
            if (users[username]) {
                authMessage.textContent = 'El usuario ya existe. Por favor, elige otro nombre de usuario.';
                authMessage.classList.add('error');
            } else {
                const role = Object.keys(users).length === 0 ? 'admin' : 'user';
                users[username] = { password: hashedPassword, role: role };
                saveUsers();
                authMessage.textContent = `Usuario ${username} registrado exitosamente como ${role}. Por favor, inicia sesión.`;
                authMessage.classList.remove('error');
            }
        } else {
            if (users[username] && users[username].password === hashedPassword) {
                loggedInUser = username;
                localStorage.setItem('loggedInUser', username);
                localStorage.setItem('loggedInUserRole', users[username].role);
                
                authPage.style.display = 'none';
                mainDashboardPage.style.display = 'flex';
                authMessage.textContent = '';
                loadAllEmployees();
                loadAllMaintenanceReports();
                updateDashboardAccess();
            } else {
                authMessage.textContent = 'Usuario o contraseña incorrectos.';
                authMessage.classList.add('error');
            }
        }
    });

    toggleAuthMode.addEventListener('click', (e) => {
        e.preventDefault();
        isRegisterMode = !isRegisterMode;
        authTitle.textContent = isRegisterMode ? 'Registrar Nuevo Usuario' : 'Iniciar Sesión';
        authSubmitBtn.textContent = isRegisterMode ? 'Registrarse' : 'Iniciar Sesión';
        toggleAuthMode.innerHTML = isRegisterMode ? 'Volver a Iniciar Sesión' : 'Regístrate aquí';
        authMessage.textContent = '';
        authMessage.classList.remove('error');
        usernameInput.value = '';
        passwordInput.value = '';
    });

    // --- Employee Data Functions ---
    function getUserDataKey(username) {
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
            allEmployees[employeeId] = { checklist: {}, history: [] };
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
            employeeListUl.innerHTML = '<li style="text-align:center; color:#888;">No hay colaboradores registrados o que coincidan con la búsqueda.</li>';
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
                `<img src="${employee.photo}" alt="Foto de ${employee.full_name}" class="employee-photo">` :
                '<div class="employee-photo"><i class="fas fa-user" style="font-size: 24px; color: #ccc;"></i></div>';

            li.innerHTML = `
                ${photoHtml}
                <div class="employee-name">
                    <strong>${employee.full_name}</strong>
                    <span>DNI: ${employee.dni} | Área: ${employee.area || "N/A"} | Empresa: ${employee.company || "N/A"}</span>
                </div>
                <span class="completion-percentage" style="color: ${color};">${percentage}%</span>
                <div class="employee-actions">
                    <button class="action-btn edit-btn" title="Editar datos">✏️</button>
                    <button class="action-btn delete-btn" title="Eliminar colaborador">🗑️</button>
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
                const empName = (allEmployees[employee.id]?.full_name || "este colaborador");
                showConfirm(`¿Estás seguro de que quieres eliminar a ${empName} y todos sus datos?`, () => {
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
            newEmployeeMessage.textContent = "Nombre completo y DNI son campos obligatorios.";
            newEmployeeMessage.style.color = "red";
            return;
        }

        if (editingEmployeeId) {
            allEmployees[editingEmployeeId].full_name = fullName;
            allEmployees[editingEmployeeId].dni = dni;
            allEmployees[editingEmployeeId].area = area;
            allEmployees[editingEmployeeId].company = company;
            addHistoryEntry(editingEmployeeId, "Datos del colaborador actualizados");
            if (currentEmployeeId === editingEmployeeId) loadEmployee(editingEmployeeId);
        } else {
            const newId = `emp-${Date.now()}`;
            if (Object.values(allEmployees).some(emp => emp.dni === dni)) {
                newEmployeeMessage.textContent = "Ya existe un colaborador con este DNI.";
                newEmployeeMessage.style.color = "red";
                return;
            }
            allEmployees[newId] = {
                id: newId, full_name: fullName, dni: dni, area: area, company: company,
                checklist: {}, history: [], photo: ""
            };
            addHistoryEntry(newId, "Nuevo colaborador añadido");
        }

        saveAllEmployees();
        renderEmployeeList(searchBar.value.trim());
        newEmployeeMessage.textContent = "¡Guardado con éxito!";
        newEmployeeMessage.style.color = "green";
        setTimeout(() => { addEmployeeModal.style.display = "none" }, 1500);
    });

    function resetChecklistUI() {
        currentEmployeeId = null;
        currentEmployeeDisplay.textContent = "Selecciona un Colaborador o crea uno nuevo";
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
        employeeHistoryUl.innerHTML = '<li style="text-align:center; color:#888;">Selecciona un colaborador para ver su historial.</li>';
    }

    function loadEmployee(employeeId) {
        if (!allEmployees[employeeId]) {
            displayMessage('Error: Colaborador no encontrado.', 'error');
            return;
        }

        currentEmployeeId = employeeId;
        const employeeData = allEmployees[employeeId];
        currentEmployeeDisplay.textContent = `Checklist de: ${employeeData.full_name} (DNI: ${employeeData.dni})`;
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
            const itemData = employeeData.checklist[item.id] || { status: null, file: '', notes: '' };
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
                <td>
                    <textarea class="notes-input" data-item-id="${item.id}" placeholder="Añadir notas...">${itemData.notes || ''}</textarea>
                </td>
            `;
            checklistBody.appendChild(row);
        });

        renderHistory(employeeData.history);
    }
    
    function renderHistory(history = []) {
        employeeHistoryUl.innerHTML = '';
        if (history.length === 0) {
            employeeHistoryUl.innerHTML = '<li style="text-align:center; color:#888;">No hay historial para este colaborador.</li>';
            return;
        }
        history.forEach(entry => {
            const li = document.createElement('li');
            const date = new Date(entry.timestamp);
            const formattedDate = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            li.innerHTML = `<strong>${entry.action}</strong> - <span class="history-timestamp">${entry.user} (${formattedDate})</span>`;
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
        displayMessage('Checklist guardado con éxito.', 'success');
    });

    newChecklistBtn.addEventListener('click', () => {
        resetChecklistUI();
        displayMessage('Vista limpiada. Seleccione un colaborador para continuar.', 'info');
    });

    // =================================================================
    // --- INICIO: FUNCIÓN PARA PDF DE RESUMEN DE PERSONAL (CON NUEVO GRÁFICO MEJORADO) ---
    // =================================================================
    async function generateChecklistSummaryPdf(action = 'download') { // <-- Parámetro 'action' añadido
        const employees = Object.values(allEmployees);
        if (employees.length === 0) {
            displayMessage('No hay colaboradores para generar un reporte.', 'warning');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
        const pageMargin = 40;
        const pageWidth = doc.internal.pageSize.getWidth();
        let currentY = 0;

        // --- 1. Cabecera del Documento ---
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(20);
        doc.text('Reportes Generales de Personal', pageWidth / 2, 60, { align: 'center' });
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100);
        doc.text(`COPESUL SAC - Generado el: ${new Date().toLocaleDateString('es-ES')}`, pageWidth / 2, 80, { align: 'center' });
        currentY = 110;

        // --- 2. Análisis de Datos ---
        const totalEmployees = employees.length;
        const conditionCounts = { 'activo': 0, 'no_activo': 0, 'sin_estado': 0 };
        const areaStats = {};
        let totalPercentageSum = 0;

        employees.forEach(emp => {
            const area = emp.area || 'Sin Área';
            if (!areaStats[area]) {
                areaStats[area] = { count: 0, totalPercentage: 0 };
            }
            areaStats[area].count++;
            const percentage = calculateCompletionPercentage(emp);
            areaStats[area].totalPercentage += percentage;
            totalPercentageSum += percentage;

            if (emp.condition === 'activo') conditionCounts.activo++;
            else if (emp.condition === 'no_activo') conditionCounts.no_activo++;
            else conditionCounts.sin_estado++;
        });

        const averageCompletion = totalEmployees > 0 ? Math.round(totalPercentageSum / totalEmployees) : 0;
        const hasDataForChart = Object.keys(areaStats).length > 0;

        // --- 3. Dibujar Tarjetas de Resumen ---
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
        const cardGap = 20;
        
        drawCard(pageMargin, currentY, cardWidth, cardHeight, "Total Colaboradores", String(totalEmployees));
        drawCard(pageMargin + cardWidth + cardGap, currentY, cardWidth, cardHeight, "Avance Promedio", `${averageCompletion}%`, [0, 86, 179]);
        drawCard(pageMargin + 2 * (cardWidth + cardGap), currentY, cardWidth, cardHeight, "Activos", String(conditionCounts.activo), [34, 139, 34], [220, 255, 220]);
        drawCard(pageMargin + 3 * (cardWidth + cardGap), currentY, cardWidth, cardHeight, "No Activos", String(conditionCounts.no_activo), [220, 20, 60], [255, 220, 220]);
        
        currentY += cardHeight + 40;

        // --- 4. Sección de Gráfico Mejorado ---
        if (hasDataForChart) {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
            doc.text('Desempeño por Área', pageMargin, currentY);
            currentY += 15;
            
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9);
            doc.text('El tamaño de la barra indica la cantidad de colaboradores. El color representa el avance promedio del checklist.', pageMargin, currentY);
            currentY += 20;

            const getBarColor = (percentage) => {
                if (percentage > 70) return 'rgba(40, 167, 69, 0.8)';   // Verde
                if (percentage > 40) return 'rgba(255, 193, 7, 0.8)';    // Amarillo
                return 'rgba(220, 53, 69, 0.8)';                         // Rojo
            };

            const renderChartToImage = (config, width, height) => {
                return new Promise(resolve => {
                    if (currentChart) currentChart.destroy();
                    chartCanvas.width = width;
                    chartCanvas.height = height;
                    const ctx = chartCanvas.getContext('2d');
                    ctx.clearRect(0, 0, width, height);
                    
                    currentChart = new Chart(ctx, {
                        ...config,
                        options: {
                            ...config.options,
                            animation: { duration: 0 },
                            events: [],
                            responsive: false,
                        }
                    });

                    setTimeout(() => resolve(currentChart.toBase64Image('image/png')), 100);
                });
            };
            
            const areaLabels = Object.keys(areaStats);
            const employeeCounts = areaLabels.map(area => areaStats[area].count);
            const backgroundColors = areaLabels.map(area => {
                const stats = areaStats[area];
                const avgPercentage = stats.count > 0 ? Math.round(stats.totalPercentage / stats.count) : 0;
                return getBarColor(avgPercentage);
            });

            const maxEmployees = Math.max(...employeeCounts, 0);

            const barChartConfig = {
                type: 'bar',
                data: {
                    labels: areaLabels,
                    datasets: [{
                        label: 'Nº de Colaboradores',
                        data: employeeCounts,
                        backgroundColor: backgroundColors,
                        borderColor: backgroundColors.map(c => c.replace('0.8', '1')),
                        borderWidth: 1,
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            title: { display: true, text: 'Nº de Colaboradores' },
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1,
                                precision: 0
                            },
                            max: Math.ceil(maxEmployees) + 1
                        },
                        x: {
                             ticks: {
                                autoSkip: false,
                                maxRotation: 45,
                                minRotation: 30,
                            }
                        }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const area = context.label;
                                    const stats = areaStats[area];
                                    const avgPercentage = stats.count > 0 ? Math.round(stats.totalPercentage / stats.count) : 0;
                                    const numColaboradores = context.parsed.y;
                                    return [
                                        `Colaboradores: ${numColaboradores}`,
                                        `Avance Promedio: ${avgPercentage}%`
                                    ];
                                }
                            }
                        }
                    }
                }
            };
            
            const chartWidth = 800;
            const chartHeight = 400;
            const chartImage = await renderChartToImage(barChartConfig, chartWidth, chartHeight);
            
            const pdfChartWidth = pageWidth - (pageMargin * 2);
            const pdfChartHeight = (pdfChartWidth / chartWidth) * chartHeight;
            
            doc.addImage(chartImage, 'PNG', pageMargin, currentY, pdfChartWidth, pdfChartHeight);
            currentY += pdfChartHeight + 30;
        }

        // --- 5. Tabla de Detalle con jsPDF-AutoTable ---
        if (currentY + 60 > doc.internal.pageSize.getHeight()) {
             doc.addPage();
             currentY = pageMargin;
        }

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.text('Detalle de Colaboradores', pageMargin, currentY);
        currentY += 20;

        const headStyles = { fillColor: [41, 128, 186], textColor: [255, 255, 255], fontStyle: 'bold' };
        
        const employeeData = employees.map(emp => [
            emp.full_name,
            emp.dni,
            emp.area || 'N/A',
            emp.condition ? (emp.condition === 'activo' ? 'Activo' : 'No Activo') : 'Sin Estado',
            `${calculateCompletionPercentage(emp)}%`
        ]);

        doc.autoTable({
            startY: currentY,
            head: [['Nombre Completo', 'DNI', 'Área', 'Estado', 'Avance Checklist']],
            body: employeeData,
            headStyles: headStyles,
            margin: { left: pageMargin, right: pageMargin }
        });

        // --- 6. Pie de Página ---
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(9);
            doc.setTextColor(150);
            doc.text(`Página ${i} de ${pageCount}`, pageWidth - pageMargin, doc.internal.pageSize.getHeight() - 20, { align: 'right' });
        }
        
        // --- 7. Final Action: View or Save the PDF ---
        if (action === 'view') {
            doc.output('dataurlnewwindow');
            displayMessage('El resumen se está abriendo en una nueva pestaña.', 'info');
        } else {
            doc.save('Resumen_General_Personal_COPESUL.pdf');
            displayMessage('Resumen general en PDF generado con éxito.', 'success');
        }

        if (currentChart) {
            currentChart.destroy();
            currentChart = null;
        }
    }
    // ===============================================================
    // --- FIN: FUNCIÓN PARA PDF DE RESUMEN DE PERSONAL ---
    // ===============================================================


    // --- Maintenance Functions ---
    function getMaintenanceDataKey(username) {
        return `maintenance_reports_${username}`;
    }

    function loadAllMaintenanceReports() {
        if (!loggedInUser) return;
        const maintenanceDataKey = getMaintenanceDataKey(loggedInUser);
        const storedReports = localStorage.getItem(maintenanceDataKey);
        allMaintenanceReports = storedReports ? JSON.parse(storedReports) : {};
        renderMaintenanceReportsList();
    }

    function saveAllMaintenanceReports() {
        if (!loggedInUser) return;
        const maintenanceDataKey = getMaintenanceDataKey(loggedInUser);
        localStorage.setItem(maintenanceDataKey, JSON.stringify(allMaintenanceReports));
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
    
    function renderReportHistory(history = []) {
        reportHistoryUl.innerHTML = '';
        if (history.length === 0) {
            reportHistoryUl.innerHTML = '<li style="text-align:center; color:#888;">No hay historial para este reporte.</li>';
            return;
        }
        history.forEach(entry => {
            const li = document.createElement('li');
            const date = new Date(entry.timestamp);
            const formattedDate = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            li.innerHTML = `<strong>${entry.action}</strong> - <span class="history-timestamp">${entry.user} (${formattedDate})</span>`;
            reportHistoryUl.appendChild(li);
        });
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
        const currentValue = selectElement.value;
        selectElement.innerHTML = addDefault ? '<option value="">-- Todos --</option>' : '';
        optionsArray.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            selectElement.appendChild(opt);
        });
        selectElement.value = currentValue;
    }

    function resetMaintenanceForm() {
        maintenanceForm.reset();
        reportIdInput.value = generateReportId();
        currentReportId = null;
        saveReportBtn.textContent = 'Guardar Reporte';
        maintenanceMessage.textContent = '';
        renderReportHistory([]);
        if (signaturePad) signaturePad.clear();
        lockTechnicianField(); 
        window.scrollTo(0, 0);
    }
    
    function renderMaintenanceReportsList() {
        maintenanceReportListBody.innerHTML = '';
        const sortedReports = Object.values(allMaintenanceReports).sort((a, b) => new Date(b.incidenceDate) - new Date(a.incidenceDate));

        const filteredReports = sortedReports.filter(report => {
            const filters = currentMaintenanceFilters;
            const statusMatch = !filters.status || report.status === filters.status;
            const equipmentMatch = !filters.equipmentName || report.equipmentName === filters.equipmentName;
            const typeMatch = !filters.maintenanceType || report.maintenanceType === filters.maintenanceType;
            const startDateMatch = !filters.startDate || (report.incidenceDate && new Date(report.incidenceDate) >= new Date(filters.startDate + 'T00:00:00'));
            const endDateMatch = !filters.endDate || (report.incidenceDate && new Date(report.incidenceDate) <= new Date(filters.endDate + 'T23:59:59'));
            return statusMatch && equipmentMatch && typeMatch && startDateMatch && endDateMatch;
        });

        if (filteredReports.length === 0) {
            maintenanceReportListBody.innerHTML = '<tr><td colspan="7" style="text-align:center; color:#888;">No hay reportes que coincidan con la búsqueda.</td></tr>';
            return;
        }

        filteredReports.forEach(report => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${report.reportId}</td>
                <td>${report.status || ''}</td>
                <td>${report.incidenceDate || ''}</td>
                <td>${report.equipmentName || ''}</td>
                <td>${report.maintenanceType || ''}</td>
                <td>${report.responsibleTechnician || ''}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${report.reportId}" title="Cargar para editar">Cargar</button>
                    <button class="action-btn" data-id="${report.reportId}" data-action="view-pdf" title="Visualización breve del PDF">Ver PDF</button>
                    <button class="action-btn" data-id="${report.reportId}" data-action="download-pdf" title="Descargar reporte en PDF">Descargar PDF</button>
                    <button class="action-btn delete-btn" data-id="${report.reportId}" title="Eliminar reporte">Eliminar</button>
                </td>
            `;
            row.querySelector('.edit-btn').addEventListener('click', (e) => editMaintenanceReport(e.target.closest('button').dataset.id));
            row.querySelector('.delete-btn').addEventListener('click', (e) => deleteMaintenanceReport(e.target.closest('button').dataset.id));
            row.querySelector('button[data-action="view-pdf"]').addEventListener('click', (e) => generateAndActionPdf(e.target.closest('button').dataset.id, 'view'));
            row.querySelector('button[data-action="download-pdf"]').addEventListener('click', (e) => generateAndActionPdf(e.target.closest('button').dataset.id, 'download'));
            maintenanceReportListBody.appendChild(row);
        });
    }

    function editMaintenanceReport(reportId) {
        const report = allMaintenanceReports[reportId];
        if (report) {
            currentReportId = reportId;
            reportIdInput.value = report.reportId;
            statusSelect.value = report.status;
            incidenceDateInput.value = report.incidenceDate;
            attentionDateInput.value = report.attentionDate;
            deliveryDateInput.value = report.deliveryDate;
            horaInicioInput.value = report.horaInicio || '';
            horaFinalizadaInput.value = report.horaFinalizada || '';
            equipmentNameSelect.value = report.equipmentName;
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

            saveReportBtn.textContent = 'Actualizar Reporte';
            maintenanceMessage.textContent = `Cargado reporte: ${reportId}`;
            maintenanceMessage.style.color = 'blue';
            
            renderReportHistory(report.history);
            window.scrollTo(0, 0);
        } else {
            displayMessage('Error: Reporte no encontrado para editar.', 'error');
        }
    }

    function deleteMaintenanceReport(reportId) {
        showConfirm(`¿Estás seguro de que quieres eliminar el reporte ${reportId}?`, () => {
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
            displayMessage('No se encontraron datos para generar el PDF.', 'error');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('REPORTE DE MANTENIMIENTO', 105, 22, { align: 'center' });

        doc.setFontSize(12);
        let currentY = 40;
        const leftMargin = 15;
        const valueMargin = 70;
        const rightMargin = 195;
        const lineHeight = 8;
        
        const addField = (label, value) => {
            if (currentY > 260) {
                doc.addPage();
                currentY = 20;
            }
            doc.setFont('helvetica', 'bold');
            doc.text(label, leftMargin, currentY);
            doc.setFont('helvetica', 'normal');
            const textLines = doc.splitTextToSize(String(value || 'N/A'), rightMargin - valueMargin);
            doc.text(textLines, valueMargin, currentY);
            currentY += (textLines.length * (lineHeight - 3)) + lineHeight;
        };
        
        addField('ID:', report.reportId);
        addField('ESTATUS:', report.status);
        currentY += lineHeight / 2;
        addField('FECHA DE INCIDENCIA:', report.incidenceDate);
        addField('FECHA DE ATENCION:', report.attentionDate);
        addField('FECHA DE ENTREGA:', report.deliveryDate);
        addField('HORA INICIO:', report.horaInicio);
        addField('HORA FINALIZADA:', report.horaFinalizada);
        currentY += lineHeight / 2;
        addField('NOMBRE DE EQUIPO:', report.equipmentName);
        addField('TIPO DE MANTENIMIENTO:', report.maintenanceType);
        currentY += lineHeight / 2;
        addField('INCIDENCIA REPORTADA:', report.reportedIncidence);
        addField('COMPONENTE REVISADO:', report.reviewedComponent);
        addField('TRABAJO REALIZADO:', report.workDone);
        addField('REPUESTOS EMPLEADOS:', report.sparePartsUsed);
        addField('OBSERVACIONES:', report.observations);
        currentY += lineHeight / 2;
        addField('OPERADOR EN TURNO:', report.operatorInShift);
        
        doc.setFont('helvetica', 'bold');
        doc.text('TECNICO RESPONSABLE:', leftMargin, currentY);
        doc.setFont('helvetica', 'normal');
        doc.text(report.responsibleTechnician || 'N/A', valueMargin, currentY);
        currentY += lineHeight * 2;

        doc.setFont('helvetica', 'bold');
        doc.text('VºBº:', leftMargin, currentY);
        if (report.vb && report.vb.startsWith('data:image')) {
            try {
                doc.addImage(report.vb, 'PNG', leftMargin + 20, currentY - 10, 60, 30);
            } catch(e) {
                console.error("Error al añadir la imagen de la firma al PDF:", e);
                doc.setFont('helvetica', 'normal');
                doc.text('[Error al mostrar firma]', valueMargin, currentY);
            }
        } else {
             doc.setFont('helvetica', 'normal');
             doc.text('[Sin Firma]', valueMargin, currentY);
        }

        if (action === 'view') {
            doc.output('dataurlnewwindow');
        } else if (action === 'download') {
            doc.save(`Reporte_Mantenimiento_${report.reportId}.pdf`);
        }
    }
    
    function downloadReportAsExcel() {
        const filters = currentMaintenanceFilters;
        const sortedReports = Object.values(allMaintenanceReports).sort((a, b) => new Date(b.incidenceDate) - new Date(a.incidenceDate));
        
        const filteredReports = sortedReports.filter(report => {
            const statusMatch = !filters.status || report.status === filters.status;
            const equipmentMatch = !filters.equipmentName || report.equipmentName === filters.equipmentName;
            const typeMatch = !filters.maintenanceType || report.maintenanceType === filters.maintenanceType;
            const startDateMatch = !filters.startDate || (report.incidenceDate && new Date(report.incidenceDate) >= new Date(filters.startDate + 'T00:00:00'));
            const endDateMatch = !filters.endDate || (report.incidenceDate && new Date(report.incidenceDate) <= new Date(filters.endDate + 'T23:59:59'));
            return statusMatch && equipmentMatch && typeMatch && startDateMatch && endDateMatch;
        });

        if (filteredReports.length === 0) {
            displayMessage('No hay reportes para exportar según la vista actual.', 'warning');
            return;
        }

        const formattedReports = filteredReports.map(report => ({
            "ID REPORTE": report.reportId || '', "ESTATUS": report.status || '',
            "FECHA DE INCIDENCIA": report.incidenceDate || '', "FECHA DE ATENCION": report.attentionDate || '',
            "FECHA DE ENTREGA": report.deliveryDate || '', "HORA INICIO": report.horaInicio || '',
            "HORA FINALIZADA": report.horaFinalizada || '', "NOMBRE DE EQUIPO": report.equipmentName || '',
            "TIPO DE MANTENIMIENTO": report.maintenanceType || '', "INCIDENCIA REPORTADA": report.reportedIncidence || '',
            "COMPONENTE REVISADO": report.reviewedComponent || '', "OBSERVACIONES": report.observations || '',
            "TRABAJO REALIZADO": report.workDone || '', "REPUESTOS EMPLEADOS": report.sparePartsUsed || '',
            "TECNICO RESPONSABLE": report.responsibleTechnician || '',
            "OPERADOR EN TURNO": report.operatorInShift || ''
        }));

        const worksheet = XLSX.utils.json_to_sheet(formattedReports);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Reportes de Mantenimiento");
        
        const today = new Date().toISOString().slice(0, 10);
        const fileName = `Reporte_Mantenimiento_${today}.xlsx`;
        
        XLSX.writeFile(workbook, fileName);
        displayMessage('Reporte de Excel generado con éxito.', 'success');
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
                <h2>Confirmación</h2>
                <p>${message}</p>
                <div class="modal-actions">
                    <button id="confirmYesBtn" class="action-btn">Sí</button>
                    <button id="confirmNoBtn" class="action-btn cancel-btn">No</button>
                </div>
            </div>
        `;
        document.body.appendChild(confirmModal);
        document.getElementById('confirmYesBtn').addEventListener('click', () => {
            onConfirm();
            confirmModal.remove();
        });
        document.getElementById('confirmNoBtn').addEventListener('click', () => {
            confirmModal.remove();
        });
    }

    function updateDashboardAccess() {
        goToMaintenanceOption.style.display = 'flex';
        goToChecklistOption.style.display = 'flex';
    }
    
    function initializeSignaturePad() {
        signaturePad = new SignaturePad(signatureCanvas, {
            backgroundColor: 'rgb(255, 255, 255)'
        });
        clearSignatureBtn.addEventListener('click', () => {
            signaturePad.clear();
        });
        
        function resizeCanvas() {
            const ratio = Math.max(window.devicePixelRatio || 1, 1);
            signatureCanvas.width = signatureCanvas.offsetWidth * ratio;
            signatureCanvas.height = signatureCanvas.offsetHeight * ratio;
            signatureCanvas.getContext("2d").scale(ratio, ratio);
            signaturePad.clear(); 
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
    }
    
    function getTechnicians() {
        let technicians = JSON.parse(localStorage.getItem('maintenanceTechnicians'));
        if (!technicians || technicians.length === 0) {
            technicians = [...TECHNICIAN_OPTIONS]; 
            localStorage.setItem('maintenanceTechnicians', JSON.stringify(technicians));
        }
        return technicians;
    }

    function getTechnicianMap() {
        let map = JSON.parse(localStorage.getItem('technicianNameMap'));
        if (!map) {
            map = {};
            localStorage.setItem('technicianNameMap', JSON.stringify(map));
        }
        return map;
    }
    
    function lockTechnicianField() {
        const user = localStorage.getItem('loggedInUser');
        let shouldLock = false;
        let technicianToSet = null;

        if (user && user.startsWith('mantenimiento@copesul.')) {
            const userSuffix = user.substring(user.lastIndexOf('.') + 1);
            let techMap = getTechnicianMap();

            if (techMap[userSuffix]) {
                technicianToSet = techMap[userSuffix];
                shouldLock = true;
            } else {
                const newTechnicianName = prompt(`Bienvenido/a.\n\nPor favor, ingresa tu nombre completo de técnico para asociarlo a tu usuario (${user}).\nEste nombre se usará en tus reportes y no se podrá cambiar.`);
                
                if (newTechnicianName && newTechnicianName.trim() !== '') {
                    const formattedName = newTechnicianName.trim().toUpperCase();
                    
                    techMap[userSuffix] = formattedName;
                    localStorage.setItem('technicianNameMap', JSON.stringify(techMap));

                    let technicians = getTechnicians();
                    if (!technicians.includes(formattedName)) {
                        technicians.push(formattedName);
                        localStorage.setItem('maintenanceTechnicians', JSON.stringify(technicians));
                        populateSelectOptions(responsibleTechnicianSelect, technicians, false);
                    }

                    technicianToSet = formattedName;
                    shouldLock = true;
                    displayMessage(`Tu nombre de técnico "${formattedName}" ha sido guardado.`, 'success');
                } else {
                    displayMessage('Debes proporcionar un nombre de técnico para crear reportes.', 'error');
                    shouldLock = false; 
                }
            }
        }

        responsibleTechnicianSelect.value = technicianToSet || '';
        responsibleTechnicianSelect.disabled = shouldLock;
    }

    goToMaintenanceOption.addEventListener('click', () => {
        const user = localStorage.getItem('loggedInUser');
        const isMaintenanceUser = user && user.startsWith('mantenimiento@copesul');
        
        if (!isMaintenanceUser && users[user]?.role !== 'admin') {
             displayMessage('No tienes permisos para acceder a este módulo.', 'error');
             return;
        }
        
        mainDashboardPage.style.display = 'none';
        maintenancePage.style.display = 'flex';
        
        populateSelectOptions(statusSelect, STATUS_OPTIONS, false);
        populateSelectOptions(searchStatus, STATUS_OPTIONS);
        populateSelectOptions(equipmentNameSelect, EQUIPMENT_OPTIONS, false);
        populateSelectOptions(searchEquipmentName, EQUIPMENT_OPTIONS);
        populateSelectOptions(maintenanceTypeSelect, MAINTENANCE_TYPE_OPTIONS, false);
        populateSelectOptions(searchMaintenanceType, MAINTENANCE_TYPE_OPTIONS);
        populateSelectOptions(responsibleTechnicianSelect, getTechnicians(), false);
        
        resetMaintenanceForm();
        loadAllMaintenanceReports();
        if (!signaturePad) initializeSignaturePad();
    });

    goToChecklistOption.addEventListener('click', () => {
        const user = localStorage.getItem('loggedInUser');
        const isMaintenanceUser = user && user.startsWith('mantenimiento@copesul');
        
        if (isMaintenanceUser) {
             displayMessage('No tienes permisos para acceder a este módulo.', 'error');
             return;
        }

        mainDashboardPage.style.display = 'none';
        appPage.style.display = 'flex';
        loadAllEmployees();
    });

    backToMainFromAppBtn.addEventListener('click', () => {
        appPage.style.display = 'none';
        mainDashboardPage.style.display = 'flex';
    });

    backToMainFromMaintenanceBtn.addEventListener('click', () => {
        maintenancePage.style.display = 'none';
        mainDashboardPage.style.display = 'flex';
    });

    function performLogout() {
        showConfirm('¿Estás seguro de que quieres cerrar sesión?', () => {
            localStorage.removeItem('loggedInUser');
            localStorage.removeItem('loggedInUserRole');
            window.location.reload();
        });
    }
    logoutBtn.addEventListener('click', performLogout);
    logoutBtnMaintenance.addEventListener('click', performLogout);
    logoutBtnMain.addEventListener('click', performLogout);

    newReportBtn.addEventListener('click', resetMaintenanceForm);

    openSearchModalBtn.addEventListener('click', () => searchModal.style.display = 'flex');
    closeSearchModalBtn.addEventListener('click', () => searchModal.style.display = 'none');
    
    applySearchBtn.addEventListener('click', () => {
        currentMaintenanceFilters = {
            startDate: searchStartDate.value,
            endDate: searchEndDate.value,
            status: searchStatus.value,
            equipmentName: searchEquipmentName.value,
            maintenanceType: searchMaintenanceType.value,
        };
        renderMaintenanceReportsList();
        searchModal.style.display = 'none';
    });

    resetSearchBtn.addEventListener('click', () => {
        searchForm.reset();
        currentMaintenanceFilters = {};
        renderMaintenanceReportsList();
    });

    window.addEventListener('click', (event) => {
        if (event.target == searchModal) searchModal.style.display = 'none';
    });

    maintenanceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const signatureData = signaturePad.isEmpty() ? '' : signaturePad.toDataURL();

        const reportData = {
            reportId: reportIdInput.value.trim(), status: statusSelect.value, incidenceDate: incidenceDateInput.value, 
            attentionDate: attentionDateInput.value, deliveryDate: deliveryDateInput.value, horaInicio: horaInicioInput.value, 
            horaFinalizada: horaFinalizadaInput.value, equipmentName: equipmentNameSelect.value, maintenanceType: maintenanceTypeSelect.value, 
            reportedIncidence: reportedIncidenceInput.value.trim(), reviewedComponent: reviewedComponentInput.value.trim(), 
            observations: observationsInput.value.trim(), workDone: workDoneInput.value.trim(), sparePartsUsed: sparePartsUsedInput.value.trim(), 
            responsibleTechnician: responsibleTechnicianSelect.value, vb: signatureData, operatorInShift: operatorInShiftInput.value.trim()
        };

        if (!reportData.incidenceDate || !reportData.equipmentName || !reportData.responsibleTechnician) {
            maintenanceMessage.textContent = 'Fecha de Incidencia, Equipo y Técnico son campos obligatorios.';
            maintenanceMessage.style.color = 'red';
            return;
        }

        const user = localStorage.getItem('loggedInUser');
        const isUpdating = !!currentReportId;
        const reportIdToSave = isUpdating ? currentReportId : reportData.reportId;
        
        if (!isUpdating && allMaintenanceReports[reportIdToSave]) {
            maintenanceMessage.textContent = `Error: El ID de reporte ${reportIdToSave} ya existe.`;
            maintenanceMessage.style.color = 'red';
            return;
        }
        
        reportData.history = (isUpdating && allMaintenanceReports[reportIdToSave]?.history) ? allMaintenanceReports[reportIdToSave].history : [];
        allMaintenanceReports[reportIdToSave] = reportData;
        addReportHistoryEntry(reportIdToSave, isUpdating ? 'Reporte Actualizado' : 'Reporte Creado', user);
        
        saveAllMaintenanceReports();
        renderMaintenanceReportsList();
        
        maintenanceMessage.textContent = `Reporte ${reportIdToSave} ${isUpdating ? 'actualizado' : 'guardado'} con éxito.`;
        maintenanceMessage.style.color = 'green';
        
        editMaintenanceReport(reportIdToSave);
    });
    
    // --- Initial Load Logic ---
    if (localStorage.getItem('loggedInUser')) {
        loggedInUser = localStorage.getItem('loggedInUser');
        authPage.style.display = 'none';
        mainDashboardPage.style.display = 'flex';
        updateDashboardAccess();
    } else {
        authPage.style.display = 'flex';
    }
    
    // --- EVENT LISTENERS ACTUALIZADOS ---
    downloadExcelBtn.addEventListener('click', downloadReportAsExcel);
    
    viewChecklistSummaryPdfBtn.addEventListener('click', () => generateChecklistSummaryPdf('view'));
    downloadChecklistSummaryPdfBtn.addEventListener('click', () => generateChecklistSummaryPdf('download'));

    searchBar.addEventListener('input', (e) => renderEmployeeList(e.target.value.trim()));
});