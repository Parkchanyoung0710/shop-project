import './DefaultModal.css';

function DefaultModal({ content, afterConfirm, confirmText = '확인', cancelText = '취소', isOpen = false, setIsOpen, data }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    afterConfirm(data);
    closeModal();
  };

  return (
    <div className='confirm-modal-container'>
      {isOpen && (
        <div className='confirm-modal'>
          <div className='modal-content'>
            <p className='message'>{content}</p>
            <div className='confirm-btn-container'>
              <button className='confirm-button' onClick={handleConfirm}>
                {confirmText}
              </button>
              <button className='confirm-button cancel' onClick={closeModal}>
                {cancelText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DefaultModal;
