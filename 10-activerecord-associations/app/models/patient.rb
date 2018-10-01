class Patient < ActiveRecord::Base
    belongs_to :doctor
    # belongs_to :hospital
    delegate :hospital, :to => :doctor

    def doctor_name_as_a_sentence
        my_doctor = Doctor.find(self.doctor_id)
        return "My doctor is #{my_doctor.name}"
    end

    def doctor_name
        self.doctor.name
    end
end