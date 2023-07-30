import './Input.css';

export default function Input({Icon, onChange, userName}) {
  return (
    <div className="login-input-container">
        {Icon && Icon}
        <input
            type="text"
            required
            placeholder="Entrez votre prénom"
            value={userName}
            onChange={(e) => onChange(e)}
        />
    </div>
  )
}
