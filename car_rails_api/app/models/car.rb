class Car < ApplicationRecord
    belongs_to :origin, optional: true
end
