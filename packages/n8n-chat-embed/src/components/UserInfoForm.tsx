import React, { useState } from 'react'
import { Send } from 'lucide-react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { UserInfoFormProps, UserInfo } from '../types'

export const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit, isLoading = false, requiredFields = [] }) => {
  const [formData, setFormData] = useState<UserInfo>({
    name: '',
    email: '',
    phone: ''
  })

  const [errors, setErrors] = useState<Partial<UserInfo>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<UserInfo> = {}

    if (requiredFields.includes('name')) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required'
      } else {
        const nameParts = formData.name.trim().split(/\s+/)
        if (nameParts.length < 2 || nameParts.some(part => part.length === 0)) {
          newErrors.name = 'Please enter both first and last name'
        }
      }
    }

    if (requiredFields.includes('email')) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    if (requiredFields.includes('phone')) {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required'
      } else if (formData.phone && !isValidPhoneNumber(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleInputChange = (field: keyof UserInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handlePhoneChange = (value: string | undefined) => {
    // Clean the value to preserve spaces and prevent unwanted country switching
    const cleanValue = value || ''
    setFormData(prev => ({ ...prev, phone: cleanValue }))

    // Clear error when user starts typing
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }))
    }
  }

  return (
    <div className="user-info-form">
      <div className="user-info-form__header">
        <h3 className="user-info-form__title">Welcome! Let's get started</h3>
        <p className="user-info-form__subtitle">Please provide your information to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="user-info-form__form">
        <div className="user-info-form__field">
          <label htmlFor="name" className="user-info-form__label">
            Full Name {requiredFields.includes('name') ? '*' : ''}
          </label>
          <input
            type="text"
            id="name"
            className={`user-info-form__input ${errors.name ? 'user-info-form__input--error' : ''}`}
            value={formData.name}
            onChange={handleInputChange('name')}
            placeholder="Enter your full name"
            disabled={isLoading}
          />
          {errors.name && <span className="user-info-form__error">{errors.name}</span>}
        </div>

        <div className="user-info-form__field">
          <label htmlFor="email" className="user-info-form__label">
            Email Address {requiredFields.includes('email') ? '*' : ''}
          </label>
          <input
            type="email"
            id="email"
            className={`user-info-form__input ${errors.email ? 'user-info-form__input--error' : ''}`}
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="Enter your email address"
            disabled={isLoading}
          />
          {errors.email && <span className="user-info-form__error">{errors.email}</span>}
        </div>

        <div className="user-info-form__field">
          <label htmlFor="phone" className="user-info-form__label">
            Phone Number {requiredFields.includes('phone') ? '*' : ''}
          </label>
          <PhoneInput
            international
            countryCallingCodeEditable={true}
            defaultCountry="US"
            value={formData.phone}
            onChange={handlePhoneChange}
            className={`user-info-form__phone-input ${errors.phone ? 'user-info-form__phone-input--error' : ''}`}
            placeholder="Enter your phone number"
            disabled={isLoading}
            limitMaxLength={false}
          />
          {errors.phone && <span className="user-info-form__error">{errors.phone}</span>}
        </div>

        <button
          type="submit"
          className="user-info-form__submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="user-info-form__loading-spinner" />
          ) : (
            <>
              <Send size={18} />
              Start Chat
            </>
          )}
        </button>
      </form>
    </div>
  )
}