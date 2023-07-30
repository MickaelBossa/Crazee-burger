import './PrimaryButton.css'

export default function PrimaryButton({Icon}) {
  return (
    <div className="login-btn-container">
                <button type="submit">Accédez à mon espace</button>
                {Icon && Icon}
            </div>
  )
}
