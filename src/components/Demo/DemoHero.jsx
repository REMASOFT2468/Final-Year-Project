// App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  // Transaction state
  const [amount, setAmount] = useState('');
  const [beneficiary, setBeneficiary] = useState('');
  const [description, setDescription] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [device, setDevice] = useState('');
  const [location, setLocation] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('idle');
  const [aiResult, setAiResult] = useState(null);
  const [showChallenge, setShowChallenge] = useState(false);
  const [challengeType, setChallengeType] = useState(null);
  const [approverPopup, setApproverPopup] = useState(false);
  const [behavioralPopup, setBehavioralPopup] = useState(false);

  // Behavioral challenge state - now with input field
  const [behavioralQuestion, setBehavioralQuestion] = useState('');
  const [behavioralInput, setBehavioralInput] = useState('');
  const [behavioralError, setBehavioralError] = useState('');

  // Timer state
  const [timer, setTimer] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  // Mock user profile data for fraud detection
  const userProfile = {
    trustedDevices: ['iPhone 13', 'MacBook Pro', 'Samsung Galaxy S22'],
    trustedLocations: ['Lagos, Nigeria', 'Abuja, Nigeria', 'Port Harcourt, Nigeria'],
    frequentBeneficiaries: ['Adebayo O.', 'Chidi E.', 'Fatima B.'],
    regularBanks: ['GTBank', 'Access Bank', 'First Bank'],
    transactionHistory: [
      { type: 'Transfer', amount: 50000, date: '2026-06-28' },
      { type: 'Bill Payment', amount: 15000, date: '2026-06-25' },
      { type: 'Transfer', amount: 250000, date: '2026-06-20' },
      { type: 'Airtime', amount: 5000, date: '2026-06-18' },
    ]
  };

  // Timer effect
  useEffect(() => {
    let interval = null;
    
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            // Timer expired - auto decline transaction
            handleTimerExpired();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    } else if (timer === 0 && isTimerActive) {
      handleTimerExpired();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, timer]);

  // Reset transaction
  const resetTransaction = () => {
    setAmount('');
    setBeneficiary('');
    setDescription('');
    setSelectedBank('');
    setDevice('');
    setLocation('');
    setTransactionType('');
    setTransactionStatus('idle');
    setAiResult(null);
    setShowChallenge(false);
    setChallengeType(null);
    setApproverPopup(false);
    setBehavioralPopup(false);
    setBehavioralInput('');
    setBehavioralError('');
    setTimer(60);
    setIsTimerActive(false);
    setTimerExpired(false);
  };

  // Handle timer expiration
  const handleTimerExpired = () => {
    if (!timerExpired) {
      setTimerExpired(true);
      setIsTimerActive(false);
      setTransactionStatus('blocked');
      setShowChallenge(false);
      setBehavioralPopup(false);
      setApproverPopup(false);
      setAiResult(prev => ({ 
        ...prev, 
        reason: '⏰ Transaction declined - Security challenge timeout (60 seconds elapsed)' 
      }));
    }
  };

  // AI Fraud Analysis - analyzes amount, location, device, and more
  const runFraudAnalysis = (txData) => {
    const amt = parseFloat(txData.amount) || 0;
    let risk = 'low';
    let reasons = [];
    let flag = false;
    let riskScore = 0;

    // CHECK 1: Amount Analysis
    if (amt > 1000000) {
      riskScore += 35;
      reasons.push('⚠️ CRITICAL: Amount exceeds ₦1,000,000');
    } else if (amt > 500000) {
      riskScore += 25;
      reasons.push('⚠️ High amount: ₦500,000+');
    } else if (amt > 200000) {
      riskScore += 15;
      reasons.push('⚠️ Above average amount: ₦200,000+');
    }

    // CHECK 2: Location Analysis
    const isNewLocation = !userProfile.trustedLocations.includes(txData.location);
    if (isNewLocation && txData.location) {
      riskScore += 30;
      reasons.push(`⚠️ New location detected: ${txData.location}`);
    }

    // CHECK 3: Device Analysis
    const isNewDevice = !userProfile.trustedDevices.includes(txData.device);
    if (isNewDevice && txData.device) {
      riskScore += 30;
      reasons.push(`⚠️ New device detected: ${txData.device}`);
    }

    // CHECK 4: Unusual transaction type
    const unusualTypes = ['International Transfer', 'Cryptocurrency', 'Large Withdrawal'];
    if (unusualTypes.includes(txData.transactionType)) {
      riskScore += 15;
      reasons.push(`⚠️ Unusual transaction type: ${txData.transactionType}`);
    }

    // CHECK 5: Unusual bank
    const isNewBank = !userProfile.regularBanks.includes(txData.bank);
    if (isNewBank && txData.bank) {
      riskScore += 10;
      reasons.push('⚠️ Unusual bank selection');
    }

    // CHECK 6: Transaction history pattern
    const recentTransfers = userProfile.transactionHistory.filter(t => t.type === 'Transfer');
    const avgTransfer = recentTransfers.reduce((sum, t) => sum + t.amount, 0) / (recentTransfers.length || 1);
    if (amt > avgTransfer * 3 && recentTransfers.length > 0) {
      riskScore += 15;
      reasons.push(`⚠️ Amount ${Math.round(amt/avgTransfer)}x higher than average (₦${avgTransfer.toLocaleString()})`);
    }

    // Determine risk level
    if (riskScore >= 60) {
      risk = 'critical';
      flag = true;
    } else if (riskScore >= 40) {
      risk = 'high';
      flag = true;
    } else if (riskScore >= 25) {
      risk = 'medium';
      flag = true;
    } else {
      risk = 'low';
      flag = false;
    }

    // Random flag for demo (3% chance even with low risk)
    if (!flag && Math.random() < 0.03) {
      risk = 'medium';
      reasons.push('Random security check (simulated)');
      flag = true;
    }

    const reason = reasons.length > 0 ? reasons.join(' • ') : '✅ Transaction appears normal';

    return { 
      risk, 
      reason, 
      flag, 
      amount: amt,
      riskScore,
      checks: {
        newDevice: isNewDevice,
        newLocation: isNewLocation,
        unusualType: unusualTypes.includes(txData.transactionType),
        newBank: isNewBank && txData.bank,
        amountAnomaly: amt > avgTransfer * 3 && recentTransfers.length > 0
      }
    };
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!amount || !beneficiary || !selectedBank || !device || !location || !transactionType) {
      alert('Please fill in all required fields');
      return;
    }

    const amtNum = parseFloat(amount);
    if (isNaN(amtNum) || amtNum <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // Reset previous state
    setApproverPopup(false);
    setBehavioralPopup(false);
    setShowChallenge(false);
    setChallengeType(null);
    setAiResult(null);
    setTransactionStatus('processing');
    setBehavioralInput('');
    setBehavioralError('');
    setTimer(60);
    setTimerExpired(false);

    // Run AI analysis with all data
    const txData = { 
      amount: amtNum, 
      beneficiary, 
      description,
      bank: selectedBank,
      device,
      location,
      transactionType
    };
    const analysis = runFraudAnalysis(txData);
    setAiResult(analysis);

    // If flagged, trigger security challenge
    if (analysis.flag) {
      // First security: Always start with behavioral challenge
      setChallengeType('behavioral');
      setShowChallenge(true);
      setTransactionStatus('blocked');
      generateBehavioralChallenge();
    } else {
      setTransactionStatus('approved');
    }
  };

  // Generate behavioral challenge with input-based questions
  const generateBehavioralChallenge = () => {
    const questions = [
      {
        q: 'Enter the full name of your most frequent beneficiary:',
        correct: ['Adebayo O.', 'adebayo o.', 'Adebayo', 'adebayo']
      },
      {
        q: 'Enter the amount of your last regular bill payment (₦):',
        correct: ['15000', '15,000', '15000.00']
      },
      {
        q: 'Enter your typical transaction location:',
        correct: ['Lagos, Nigeria', 'lagos', 'Lagos', 'Lagos, Nigeria', 'lagos nigeria']
      },
      {
        q: 'Enter your preferred bank for transfers:',
        correct: ['GTBank', 'gtbank', 'Gtbank', 'GT Bank']
      }
    ];
    const pick = questions[Math.floor(Math.random() * questions.length)];
    setBehavioralQuestion(pick.q);
    setBehavioralPopup(true);
    setIsTimerActive(true); // Start timer when challenge appears
  };

  // Behavioral handlers - First security layer with input validation
  const handleBehavioralSubmit = () => {
    if (!behavioralInput.trim()) {
      setBehavioralError('Please enter an answer');
      return;
    }

    // Validate answer (simple validation - check if input contains key information)
    // For demo purposes, we accept any non-empty input as correct
    const isCorrect = behavioralInput.trim().length > 0;

    if (isCorrect) {
      setBehavioralError('');
      setBehavioralPopup(false);
      setIsTimerActive(false); // Stop timer
      // After behavioral challenge is passed, trigger second security (approver)
      setChallengeType('approver');
      setApproverPopup(true);
      setTimer(60); // Reset timer for approver stage
      setIsTimerActive(true); // Start timer for approver stage
    } else {
      setBehavioralError('Incorrect answer. Please try again.');
    }
  };

  const handleBehavioralCancel = () => {
    setBehavioralPopup(false);
    setIsTimerActive(false);
    setTransactionStatus('blocked');
    setShowChallenge(false);
    setBehavioralInput('');
    setBehavioralError('');
    setTimer(60);
    setAiResult(prev => ({ ...prev, reason: '❌ Behavioral challenge failed - Transaction blocked' }));
  };

  // Approver handlers - Second security layer
  const handleApproverApprove = () => {
    setIsTimerActive(false);
    setApproverPopup(false);
    setTransactionStatus('approved');
    setShowChallenge(false);
    setTimer(60);
    setAiResult(prev => ({ ...prev, reason: '✅ All security checks passed - Transaction approved' }));
  };

  const handleApproverReject = () => {
    setIsTimerActive(false);
    setApproverPopup(false);
    setTransactionStatus('blocked');
    setShowChallenge(false);
    setTimer(60);
    setAiResult(prev => ({ ...prev, reason: '❌ Rejected by third-party approver - Transaction blocked' }));
  };

  // Status badge renderer
  const getStatusBadge = () => {
    const badges = {
      idle: <span className="text-sm text-slate-400">Awaiting transaction</span>,
      processing: (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
          <i className="fas fa-spinner fa-spin"></i> Analyzing
        </span>
      ),
      approved: (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700">
          <i className="fas fa-check-circle"></i> Approved
        </span>
      ),
      blocked: (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
          <i className="fas fa-exclamation-triangle"></i> Blocked
        </span>
      )
    };
    return badges[transactionStatus] || null;
  };

  // Render challenge modal
  const renderChallengeModal = () => {
    // First Security: Behavioral Challenge with Input
    if (behavioralPopup) {
      return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl max-w-md w-full p-6 shadow-2xl animate-[fadeSlide_0.25s_ease-out]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-full bg-indigo-100 text-indigo-700">
                  <i className="fas fa-brain text-xl"></i>
                </span>
                <h3 className="text-xl font-bold text-slate-800">Security Level 1</h3>
              </div>
              {/* Timer Display */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${timer <= 10 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-amber-100 text-amber-700'}`}>
                <i className="fas fa-clock"></i>
                <span className="font-bold text-lg">{timer}s</span>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
              <p className="text-sm text-amber-800">
                <i className="fas fa-shield-alt mr-1"></i> 
                Please verify your identity by answering this personal question from memory
              </p>
              <p className="text-xs text-amber-600 mt-1">
                <i className="fas fa-exclamation-circle mr-1"></i> 
                You have {timer} seconds to complete this challenge
              </p>
            </div>
            <p className="text-slate-700 font-medium mb-3">{behavioralQuestion}</p>
            <div className="space-y-3 mb-4">
              <input
                type="text"
                value={behavioralInput}
                onChange={(e) => {
                  setBehavioralInput(e.target.value);
                  setBehavioralError('');
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleBehavioralSubmit();
                  }
                }}
                className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                placeholder="Type your answer here..."
                autoFocus
                disabled={timerExpired}
              />
              {behavioralError && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <i className="fas fa-exclamation-circle"></i> {behavioralError}
                </p>
              )}
              {timerExpired && (
                <p className="text-sm text-red-600 font-medium flex items-center gap-1">
                  <i className="fas fa-times-circle"></i> Time expired! Transaction declined.
                </p>
              )}
            </div>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={handleBehavioralCancel} 
                className="px-5 py-2 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition font-medium"
                disabled={timerExpired}
              >
                Cancel
              </button>
              <button 
                onClick={handleBehavioralSubmit} 
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition shadow-md font-medium"
                disabled={timerExpired}
              >
                <i className="fas fa-check mr-1"></i> Verify
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-3 text-center">
              <i className="fas fa-user-check mr-1"></i> Based on your transaction history
            </p>
          </div>
        </div>
      );
    }

    // Second Security: Approver with Timer
    if (approverPopup) {
      return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl max-w-md w-full p-6 shadow-2xl animate-[fadeSlide_0.25s_ease-out]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-full bg-amber-100 text-amber-700">
                  <i className="fas fa-user-shield text-xl"></i>
                </span>
                <h3 className="text-xl font-bold text-slate-800">Security Level 2</h3>
              </div>
              {/* Timer Display */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${timer <= 10 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-amber-100 text-amber-700'}`}>
                <i className="fas fa-clock"></i>
                <span className="font-bold text-lg">{timer}s</span>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4">
              <p className="text-sm text-emerald-800">
                <i className="fas fa-check-circle mr-1"></i> 
                Behavioral challenge passed. Final approval required.
              </p>
              <p className="text-xs text-emerald-600 mt-1">
                <i className="fas fa-exclamation-circle mr-1"></i> 
                You have {timer} seconds to complete this approval
              </p>
            </div>
            <p className="text-slate-600 mb-3">A third-party approver must review this flagged transaction.</p>
            <div className="bg-slate-50 p-3 rounded-xl mb-4 text-sm space-y-1">
              <p><span className="font-semibold">Amount:</span> ₦{parseFloat(amount).toLocaleString()}</p>
              <p><span className="font-semibold">Beneficiary:</span> {beneficiary}</p>
              <p><span className="font-semibold">Bank:</span> {selectedBank}</p>
              <p><span className="font-semibold">Device:</span> {device}</p>
              <p><span className="font-semibold">Location:</span> {location}</p>
            </div>
            {timerExpired && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
                <p className="text-sm text-red-600 font-medium flex items-center gap-1">
                  <i className="fas fa-times-circle"></i> Time expired! Transaction declined.
                </p>
              </div>
            )}
            <div className="flex gap-3 justify-end">
              <button 
                onClick={handleApproverReject} 
                className="px-5 py-2 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition font-medium"
                disabled={timerExpired}
              >
                Reject
              </button>
              <button 
                onClick={handleApproverApprove} 
                className="px-5 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition shadow-md font-medium"
                disabled={timerExpired}
              >
                Approve
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-3 text-center">
              <i className="fas fa-shield-alt mr-1"></i> Process cycle approver
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-4 bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 mt-8 pt-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT PANEL - Transaction Form */}
          <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-100 p-2.5 rounded-xl text-indigo-700">
                <i className="fas fa-exchange-alt text-xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Initiate Transfer</h2>
              <span className="ml-auto text-xs bg-white/50 px-3 py-1 rounded-full text-slate-500 flex items-center gap-1">
                <i className="fas fa-shield-alt"></i> Nigeria
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Beneficiary *</label>
                <input
                  type="text"
                  value={beneficiary}
                  onChange={(e) => setBeneficiary(e.target.value)}
                  className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                  placeholder="Account name or alias"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Amount (₦) *</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Select Bank *</label>
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                >
                  <option value="">Select bank</option>
                  <option value="GTBank">GTBank</option>
                  <option value="Access Bank">Access Bank</option>
                  <option value="First Bank">First Bank</option>
                  <option value="Zenith Bank">Zenith Bank</option>
                  <option value="UBA">UBA</option>
                  <option value="Opay">Opay</option>
                  <option value="Palmpay">Palmpay</option>
                  <option value="Kuda Bank">Kuda Bank</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Device *</label>
                <select
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                >
                  <option value="">Select device</option>
                  <option value="iPhone 13">iPhone 13</option>
                  <option value="iPhone 14">iPhone 14</option>
                  <option value="Samsung Galaxy S22">Samsung Galaxy S22</option>
                  <option value="Samsung Galaxy S23">Samsung Galaxy S23</option>
                  <option value="MacBook Pro">MacBook Pro</option>
                  <option value="Windows PC">Windows PC</option>
                  <option value="Unknown Device">Unknown Device</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Location *</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                >
                  <option value="">Select location</option>
                  <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                  <option value="Abuja, Nigeria">Abuja, Nigeria</option>
                  <option value="Port Harcourt, Nigeria">Port Harcourt, Nigeria</option>
                  <option value="Kano, Nigeria">Kano, Nigeria</option>
                  <option value="Ibadan, Nigeria">Ibadan, Nigeria</option>
                  <option value="London, UK">London, UK</option>
                  <option value="Dubai, UAE">Dubai, UAE</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Transaction Type *</label>
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                >
                  <option value="">Select transaction type</option>
                  <option value="Transfer">Transfer</option>
                  <option value="Bill Payment">Bill Payment</option>
                  <option value="Airtime">Airtime</option>
                  <option value="International Transfer">International Transfer</option>
                  <option value="Cryptocurrency">Cryptocurrency</option>
                  <option value="Large Withdrawal">Large Withdrawal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Description (optional)</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                  placeholder="e.g. rent, supplies"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={transactionStatus === 'processing' || transactionStatus === 'blocked'}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold text-white shadow-md transition flex items-center justify-center gap-2 ${
                    transactionStatus === 'processing' || transactionStatus === 'blocked'
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg'
                  }`}
                >
                  <i className="fas fa-paper-plane"></i> Send
                </button>
                <button
                  type="button"
                  onClick={resetTransaction}
                  className="px-4 py-3 bg-white/70 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-100 transition"
                >
                  <i className="fas fa-undo-alt"></i>
                </button>
              </div>
            </form>

            <div className="mt-6 flex items-center justify-between border-t border-slate-200/70 pt-4">
              <span className="text-sm text-slate-500">Status:</span>
              {getStatusBadge()}
            </div>

            <div className="mt-2 flex gap-4 text-xs text-slate-400">
              <span><i className="fas fa-lock mr-1"></i> Secure</span>
              <span><i className="fas fa-robot mr-1"></i> AI monitoring</span>
              <span><i className="fas fa-shield-alt mr-1"></i> 2FA</span>
            </div>
          </div>

          {/* RIGHT PANEL - AI Analysis */}
          <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-xl transition-all flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rose-100 p-2.5 rounded-xl text-rose-600">
                <i className="fas fa-robot text-xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">AI Fraud Detection</h2>
              <span className="ml-auto text-xs bg-blue-50 px-3 py-1 rounded-full text-blue-600 flex items-center gap-1">
                <i className="fas fa-microchip"></i> live
              </span>
            </div>

            {aiResult ? (
              <div className="space-y-4 flex-1">
                <div className={`p-4 rounded-xl border ${
                  aiResult.risk === 'critical' ? 'bg-red-50 border-red-300' :
                  aiResult.risk === 'high' ? 'bg-red-50 border-red-200' :
                  aiResult.risk === 'medium' ? 'bg-amber-50 border-amber-200' :
                  'bg-emerald-50 border-emerald-200'
                }`}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Risk Assessment</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      aiResult.risk === 'critical' ? 'bg-red-600 text-white' :
                      aiResult.risk === 'high' ? 'bg-red-200 text-red-800' :
                      aiResult.risk === 'medium' ? 'bg-amber-200 text-amber-800' :
                      'bg-emerald-200 text-emerald-800'
                    }`}>
                      {aiResult.risk.toUpperCase()} {aiResult.riskScore && `(${aiResult.riskScore}%)`}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-2 whitespace-pre-line">{aiResult.reason}</p>
                  
                  {/* Show detection flags */}
                  {aiResult.checks && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {aiResult.checks.newDevice && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                          <i className="fas fa-device mr-1"></i> New Device
                        </span>
                      )}
                      {aiResult.checks.newLocation && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                          <i className="fas fa-map-marker-alt mr-1"></i> New Location
                        </span>
                      )}
                      {aiResult.checks.unusualType && (
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                          <i className="fas fa-exclamation-triangle mr-1"></i> Unusual Type
                        </span>
                      )}
                      {aiResult.checks.newBank && (
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                          <i className="fas fa-university mr-1"></i> Unusual Bank
                        </span>
                      )}
                      {aiResult.checks.amountAnomaly && (
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                          <i className="fas fa-chart-line mr-1"></i> Amount Anomaly
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/50 p-3 rounded-xl">
                    <span className="text-slate-400 block text-sm">Amount</span>
                    <span className="font-medium text-slate-700">₦{aiResult.amount?.toLocaleString() || '0'}</span>
                  </div>
                  <div className="bg-white/50 p-3 rounded-xl">
                    <span className="text-slate-400 block text-sm">Beneficiary</span>
                    <span className="font-medium text-slate-700 truncate block">{beneficiary || '—'}</span>
                  </div>
                  <div className="bg-white/50 p-3 rounded-xl">
                    <span className="text-slate-400 block text-sm">Bank</span>
                    <span className="font-medium text-slate-700">{selectedBank || '—'}</span>
                  </div>
                  <div className="bg-white/50 p-3 rounded-xl">
                    <span className="text-slate-400 block text-sm">Device</span>
                    <span className="font-medium text-slate-700">{device || '—'}</span>
                  </div>
                  <div className="bg-white/50 p-3 rounded-xl col-span-2">
                    <span className="text-slate-400 block text-sm">Location</span>
                    <span className="font-medium text-slate-700">{location || '—'}</span>
                  </div>
                </div>

                <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-200/50">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">Security Status</span>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    {transactionStatus === 'approved' && (
                      <span className="text-emerald-600"><i className="fas fa-check-circle mr-1"></i> Fully Approved</span>
                    )}
                    {transactionStatus === 'blocked' && (
                      <span className="text-red-600"><i className="fas fa-ban mr-1"></i> Blocked</span>
                    )}
                    {transactionStatus === 'processing' && (
                      <span className="text-blue-600"><i className="fas fa-spinner fa-spin mr-1"></i> Reviewing</span>
                    )}
                    {transactionStatus === 'idle' && <span className="text-slate-400">—</span>}
                    {showChallenge && behavioralPopup && (
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                        <i className="fas fa-brain"></i> Behavioral Challenge
                        {isTimerActive && <span className="ml-1 bg-indigo-200 px-1.5 py-0.5 rounded-full text-xs">{timer}s</span>}
                      </span>
                    )}
                    {showChallenge && approverPopup && (
                      <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                        <i className="fas fa-user-shield"></i> Approver Required
                        {isTimerActive && <span className="ml-1 bg-amber-200 px-1.5 py-0.5 rounded-full text-xs">{timer}s</span>}
                      </span>
                    )}
                    {timerExpired && (
                      <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                        <i className="fas fa-clock"></i> Time Expired
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={resetTransaction}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-600 transition text-sm flex items-center justify-center gap-2"
                >
                  <i className="fas fa-rotate-right"></i> New transaction
                </button>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8">
                <i className="fas fa-shield-alt text-5xl mb-4 opacity-30"></i>
                <p className="text-center">Submit a transaction<br />AI will check device, location,<br />amount, and transaction patterns</p>
              </div>
            )}
          </div>
        </div>

        {/* Challenge Modals */}
        {renderChallengeModal()}
      </div>

      {/* Tailwind animation keyframes */}
      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-\\[fadeSlide_0\\.25s_ease-out\\] {
          animation: fadeSlide 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;