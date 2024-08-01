export interface LegalComplianceRsp {
  data: LegalComplianceData[]
  meta: Meta
}

export interface LegalComplianceData {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  approved_for: string[]
  agreement_url: string
  records: string
  customer: Customer
  trails: Trails,
  approved: boolean,
}

export interface Customer {
  data: CustomerData
}

export interface CustomerData {
  id: number
  attributes: CustomerAttributes
}

export interface CustomerAttributes {
  name: string
  domain: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Trails {
  data: TrailsData[]
}

export interface TrailsData {
  id: number
  attributes: TrailsAttributes
}

export interface TrailsAttributes {
  date: string
  approved: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Meta {}
