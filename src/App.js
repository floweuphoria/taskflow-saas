import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Plus, CheckCircle, Clock, Users, BarChart3, Settings, LogOut, Eye, EyeOff } from 'lucide-react';

const TaskFlowApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design new landing page', status: 'in-progress', assignee: 'Sarah Chen', dueDate: '2025-07-25', priority: 'high' },
    { id: 2, title: 'Implement user authentication', status: 'completed', assignee: 'Mike Johnson', dueDate: '2025-07-22', priority: 'medium' },
    { id: 3, title: 'Write API documentation', status: 'pending', assignee: 'Alex Rivera', dueDate: '2025-07-28', priority: 'low' },
    { id: 4, title: 'Set up CI/CD pipeline', status: 'in-progress', assignee: 'Emma Wilson', dueDate: '2025-07-30', priority: 'high' }
  ]);

  // Demo users for login
  const demoUsers = {
    'demo@taskflow.com': { password: 'password123', name: 'Demo User', role: 'Project Manager' },
    'admin@taskflow.com': { password: 'admin123', name: 'Admin User', role: 'Administrator' }
  };

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    const user = demoUsers[loginForm.email];
    if (user && user.password === loginForm.password) {
      setCurrentUser({ email: loginForm.email, ...user });
      setIsLoggedIn(true);
      setLoginForm({ email: '', password: '' });
    } else {
      alert('Invalid credentials. Try demo@taskflow.com / password123');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActiveTab('dashboard');
  };

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: 'New Task',
      status: 'pending',
      assignee: currentUser.name,
      dueDate: '2025-07-31',
      priority: 'medium'
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        : task
    ));
  };

  // Inline styles object
  const styles = {
    loginContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #4338ca 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    loginCard: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
      padding: '40px',
      width: '100%',
      maxWidth: '400px'
    },
    logoContainer: {
      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      color: 'white'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '8px',
      textAlign: 'center'
    },
    subtitle: {
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: '32px'
    },
    inputGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    inputContainer: {
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '12px 16px 12px 40px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.2s',
      boxSizing: 'border-box'
    },
    inputIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      width: '20px',
      height: '20px'
    },
    eyeButton: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#9ca3af',
      cursor: 'pointer',
      padding: '0'
    },
    signInButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
      color: 'white',
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'transform 0.2s'
    },
    demoBox: {
      background: '#f9fafb',
      padding: '16px',
      borderRadius: '8px',
      marginTop: '24px'
    },
    demoText: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '8px'
    },
    demoCredential: {
      fontSize: '12px',
      color: '#6b7280',
      margin: '2px 0'
    },
    appContainer: {
      minHeight: '100vh',
      background: '#f9fafb',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      background: 'white',
      borderBottom: '1px solid #e5e7eb',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    headerLogo: {
      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
      width: '40px',
      height: '40px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    headerTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#111827'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    userInfo: {
      textAlign: 'right'
    },
    userName: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#111827'
    },
    userRole: {
      fontSize: '12px',
      color: '#6b7280'
    },
    avatar: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    logoutButton: {
      background: 'none',
      border: 'none',
      color: '#6b7280',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px'
    },
    mainContent: {
      display: 'flex'
    },
    sidebar: {
      width: '256px',
      background: 'white',
      borderRight: '1px solid #e5e7eb',
      height: 'calc(100vh - 73px)',
      padding: '24px'
    },
    navButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '8px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: '500'
    },
    activeNavButton: {
      background: '#eff6ff',
      color: '#1d4ed8',
      borderRight: '2px solid #1d4ed8'
    },
    inactiveNavButton: {
      color: '#6b7280'
    },
    contentArea: {
      flex: 1,
      padding: '32px'
    },
    pageTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '8px'
    },
    pageSubtitle: {
      color: '#6b7280',
      marginBottom: '32px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    statCard: {
      background: 'white',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #e5e7eb'
    },
    statHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    statLabel: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#6b7280'
    },
    statValue: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#111827'
    },
    statIcon: {
      padding: '12px',
      borderRadius: '8px'
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb'
    },
    cardHeader: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb'
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111827'
    },
    cardContent: {
      padding: '24px'
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px',
      background: '#f9fafb',
      borderRadius: '8px',
      marginBottom: '16px'
    },
    taskLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    taskCheckbox: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      border: '2px solid #d1d5db',
      background: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskTitle: {
      fontWeight: '500',
      color: '#111827'
    },
    taskAssignee: {
      fontSize: '14px',
      color: '#6b7280'
    },
    statusBadge: {
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500',
      marginRight: '8px'
    },
    addButton: {
      background: '#2563eb',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginCard}>
          <div style={{textAlign: 'center', marginBottom: '32px'}}>
            <div style={styles.logoContainer}>
              <BarChart3 size={32} />
            </div>
            <h1 style={styles.title}>TaskFlow</h1>
            <p style={styles.subtitle}>Streamline your project management</p>
          </div>

          <div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <div style={styles.inputContainer}>
                <Mail style={styles.inputIcon} size={20} />
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.inputContainer}>
                <Lock style={styles.inputIcon} size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
                  style={{...styles.input, paddingRight: '48px'}}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              onClick={handleLogin}
              style={styles.signInButton}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Sign In
            </button>
          </div>

          <div style={styles.demoBox}>
            <p style={styles.demoText}>Demo Credentials:</p>
            <p style={styles.demoCredential}>Email: demo@taskflow.com</p>
            <p style={styles.demoCredential}>Password: password123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.appContainer}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.headerLogo}>
            <BarChart3 size={24} />
          </div>
          <h1 style={styles.headerTitle}>TaskFlow</h1>
        </div>
        
        <div style={styles.headerRight}>
          <div style={styles.userInfo}>
            <p style={styles.userName}>{currentUser.name}</p>
            <p style={styles.userRole}>{currentUser.role}</p>
          </div>
          <div style={styles.avatar}>
            <User size={20} />
          </div>
          <button
            onClick={handleLogout}
            style={styles.logoutButton}
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <div style={styles.mainContent}>
        {/* Sidebar */}
        <nav style={styles.sidebar}>
          <div>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'tasks', label: 'Tasks', icon: CheckCircle },
              { id: 'team', label: 'Team', icon: Users },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  ...styles.navButton,
                  ...(activeTab === item.id ? styles.activeNavButton : styles.inactiveNavButton)
                }}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main style={styles.contentArea}>
          {activeTab === 'dashboard' && (
            <div>
              <div style={{marginBottom: '32px'}}>
                <h2 style={styles.pageTitle}>Welcome back, {currentUser.name}!</h2>
                <p style={styles.pageSubtitle}>Here's what's happening with your projects today.</p>
              </div>

              {/* Stats Cards */}
              <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                  <div style={styles.statHeader}>
                    <div>
                      <p style={styles.statLabel}>Total Tasks</p>
                      <p style={styles.statValue}>{tasks.length}</p>
                    </div>
                    <div style={{...styles.statIcon, background: '#dbeafe', color: '#2563eb'}}>
                      <CheckCircle size={24} />
                    </div>
                  </div>
                </div>

                <div style={styles.statCard}>
                  <div style={styles.statHeader}>
                    <div>
                      <p style={styles.statLabel}>Completed</p>
                      <p style={{...styles.statValue, color: '#059669'}}>{tasks.filter(t => t.status === 'completed').length}</p>
                    </div>
                    <div style={{...styles.statIcon, background: '#d1fae5', color: '#059669'}}>
                      <CheckCircle size={24} />
                    </div>
                  </div>
                </div>

                <div style={styles.statCard}>
                  <div style={styles.statHeader}>
                    <div>
                      <p style={styles.statLabel}>In Progress</p>
                      <p style={{...styles.statValue, color: '#d97706'}}>{tasks.filter(t => t.status === 'in-progress').length}</p>
                    </div>
                    <div style={{...styles.statIcon, background: '#fed7aa', color: '#d97706'}}>
                      <Clock size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Tasks */}
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>Recent Tasks</h3>
                </div>
                <div style={styles.cardContent}>
                  {tasks.slice(0, 3).map(task => (
                    <div key={task.id} style={styles.taskItem}>
                      <div style={styles.taskLeft}>
                        <button
                          onClick={() => toggleTaskStatus(task.id)}
                          style={{
                            ...styles.taskCheckbox,
                            background: task.status === 'completed' ? '#059669' : 'white',
                            borderColor: task.status === 'completed' ? '#059669' : '#d1d5db'
                          }}
                        >
                          {task.status === 'completed' && <CheckCircle size={16} color="white" />}
                        </button>
                        <div>
                          <p style={{
                            ...styles.taskTitle,
                            textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                            color: task.status === 'completed' ? '#6b7280' : '#111827'
                          }}>
                            {task.title}
                          </p>
                          <p style={styles.taskAssignee}>{task.assignee}</p>
                        </div>
                      </div>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <span style={{
                          ...styles.statusBadge,
                          background: task.status === 'completed' ? '#d1fae5' : 
                                     task.status === 'in-progress' ? '#dbeafe' : '#f3f4f6',
                          color: task.status === 'completed' ? '#059669' : 
                                 task.status === 'in-progress' ? '#2563eb' : '#6b7280'
                        }}>
                          {task.status}
                        </span>
                        <span style={{
                          ...styles.statusBadge,
                          background: task.priority === 'high' ? '#fee2e2' : 
                                     task.priority === 'medium' ? '#fef3c7' : '#d1fae5',
                          color: task.priority === 'high' ? '#dc2626' : 
                                 task.priority === 'medium' ? '#d97706' : '#059669'
                        }}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px'}}>
                <div>
                  <h2 style={styles.pageTitle}>Tasks</h2>
                  <p style={styles.pageSubtitle}>Manage and track your project tasks</p>
                </div>
                <button onClick={addTask} style={styles.addButton}>
                  <Plus size={20} />
                  <span>Add Task</span>
                </button>
              </div>

              <div style={styles.card}>
                <div style={{overflowX: 'auto'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse'}}>
                    <thead style={{background: '#f9fafb', borderBottom: '1px solid #e5e7eb'}}>
                      <tr>
                        <th style={{textAlign: 'left', padding: '16px', fontWeight: '600', color: '#111827'}}>Task</th>
                        <th style={{textAlign: 'left', padding: '16px', fontWeight: '600', color: '#111827'}}>Assignee</th>
                        <th style={{textAlign: 'left', padding: '16px', fontWeight: '600', color: '#111827'}}>Status</th>
                        <th style={{textAlign: 'left', padding: '16px', fontWeight: '600', color: '#111827'}}>Priority</th>
                        <th style={{textAlign: 'left', padding: '16px', fontWeight: '600', color: '#111827'}}>Due Date</th>
                        <th style={{textAlign: 'left', padding: '16px', fontWeight: '600', color: '#111827'}}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map(task => (
                        <tr key={task.id} style={{borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '16px'}}>
                            <p style={{
                              fontWeight: '500',
                              textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                              color: task.status === 'completed' ? '#6b7280' : '#111827'
                            }}>
                              {task.title}
                            </p>
                          </td>
                          <td style={{padding: '16px', color: '#6b7280'}}>{task.assignee}</td>
                          <td style={{padding: '16px'}}>
                            <span style={{
                              padding: '4px 12px',
                              borderRadius: '12px',
                              fontSize: '12px',
                              fontWeight: '500',
                              background: task.status === 'completed' ? '#d1fae5' : 
                                         task.status === 'in-progress' ? '#dbeafe' : '#f3f4f6',
                              color: task.status === 'completed' ? '#059669' : 
                                     task.status === 'in-progress' ? '#2563eb' : '#6b7280'
                            }}>
                              {task.status}
                            </span>
                          </td>
                          <td style={{padding: '16px'}}>
                            <span style={{
                              padding: '4px 12px',
                              borderRadius: '12px',
                              fontSize: '12px',
                              fontWeight: '500',
                              background: task.priority === 'high' ? '#fee2e2' : 
                                         task.priority === 'medium' ? '#fef3c7' : '#d1fae5',
                              color: task.priority === 'high' ? '#dc2626' : 
                                     task.priority === 'medium' ? '#d97706' : '#059669'
                            }}>
                              {task.priority}
                            </span>
                          </td>
                          <td style={{padding: '16px', color: '#6b7280'}}>{task.dueDate}</td>
                          <td style={{padding: '16px'}}>
                            <button
                              onClick={() => toggleTaskStatus(task.id)}
                              style={{
                                color: '#2563eb',
                                background: 'none',
                                border: 'none',
                                fontWeight: '500',
                                fontSize: '14px',
                                cursor: 'pointer'
                              }}
                            >
                              {task.status === 'completed' ? 'Reopen' : 'Complete'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div>
              <div style={{marginBottom: '32px'}}>
                <h2 style={styles.pageTitle}>Team</h2>
                <p style={styles.pageSubtitle}>Manage your team members and their roles</p>
              </div>

              <div style={{...styles.card, padding: '24px'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px'}}>
                  {['Sarah Chen', 'Mike Johnson', 'Alex Rivera', 'Emma Wilson', currentUser.name].map((name, index) => (
                    <div key={name} style={{background: '#f9fafb', padding: '24px', borderRadius: '8px'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white'
                        }}>
                          <User size={24} />
                        </div>
                        <div>
                          <p style={{fontWeight: '600', color: '#111827'}}>{name}</p>
                          <p style={{fontSize: '14px', color: '#6b7280'}}>
                            {name === currentUser.name ? currentUser.role : 'Developer'}
                          </p>
                        </div>
                      </div>
                      <div style={{marginTop: '16px'}}>
                        <p style={{fontSize: '14px', color: '#6b7280'}}>
                          Tasks: {tasks.filter(t => t.assignee === name).length}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div style={{marginBottom: '32px'}}>
                <h2 style={styles.pageTitle}>Settings</h2>
                <p style={styles.pageSubtitle}>Manage your account and preferences</p>
              </div>

              <div style={{...styles.card, padding: '24px'}}>
                <div>
                  <h3 style={{fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px'}}>Account Information</h3>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px'}}>
                    <div>
                      <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>Name</label>
                      <input
                        type="text"
                        value={currentUser.name}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          boxSizing: 'border-box'
                        }}
                        readOnly
                      />
                    </div>
                    <div>
                      <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>Email</label>
                      <input
                        type="email"
                        value={currentUser.email}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          boxSizing: 'border-box'
                        }}
                        readOnly
                      />
                    </div>
                  </div>

                  <h3 style={{fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px'}}>Notifications</h3>
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
                      <input type="checkbox" defaultChecked style={{marginRight: '12px'}} />
                      <span style={{color: '#374151'}}>Email notifications for new tasks</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
                      <input type="checkbox" defaultChecked style={{marginRight: '12px'}} />
                      <span style={{color: '#374151'}}>Push notifications for due dates</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
                      <input type="checkbox" style={{marginRight: '12px'}} />
                      <span style={{color: '#374151'}}>Weekly progress reports</span>
                    </label>
                  </div>

                  <div style={{paddingTop: '24px', borderTop: '1px solid #e5e7eb'}}>
                    <button style={{
                      background: '#2563eb',
                      color: 'white',
                      padding: '8px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TaskFlowApp;