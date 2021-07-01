class Car < ApplicationRecord
    belongs_to :origin

    validates :make, presence: true
    validates :model, presence: true
    validates :color, presence: true
    validates :year, presence: true
end
