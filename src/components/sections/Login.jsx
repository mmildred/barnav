import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    tipoCuenta: 'artista',
    aceptaTerminos: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>
          <p className="text-gray-400 text-sm">
            {isLogin
              ? 'Accede a tu cuenta'
              : 'Regístrate y comparte tu música'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          {/* Tipo de cuenta */}
          {!isLogin && (
            <div className="mb-6">
              <p className="text-sm text-gray-300 mb-3">Tipo de cuenta</p>
              <div className="flex gap-3">
                {['artista', 'oyente'].map(tipo => (
                  <label
                    key={tipo}
                    className={`flex-1 text-center p-3 rounded-lg border cursor-pointer ${
                      formData.tipoCuenta === tipo
                        ? 'border-purple-500 text-white'
                        : 'border-gray-700 text-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="tipoCuenta"
                      value={tipo}
                      checked={formData.tipoCuenta === tipo}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {tipo}
                  </label>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-200"
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-200"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-200"
              required
            />

            {!isLogin && (
              <label className="flex items-start gap-2 text-sm text-gray-400">
                <input
                  type="checkbox"
                  name="aceptaTerminos"
                  checked={formData.aceptaTerminos}
                  onChange={handleChange}
                  required
                />
                Acepto los términos y condiciones
              </label>
            )}

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition"
            >
              {isLogin ? 'Entrar' : 'Registrarse'}
            </button>
          </form>

          {/* Switch login/register */}
          <p className="mt-6 text-center text-sm text-gray-400">
            {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-purple-400 hover:underline"
            >
              {isLogin ? 'Crear cuenta' : 'Iniciar sesión'}
            </button>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Soporte: soporte@sonicwaves.com
        </p>
      </div>
    </section>
  )
}

export default Login
